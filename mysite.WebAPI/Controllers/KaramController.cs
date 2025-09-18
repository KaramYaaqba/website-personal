using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using OpenAI.Embeddings;
using Betalgo.Ranul.OpenAI.ObjectModels;
using Betalgo.Ranul.OpenAI.Managers;
using Betalgo.Ranul.OpenAI.ObjectModels.RequestModels;
using Betalgo.Ranul.OpenAI;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Configuration;

namespace mysite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KaramController : ControllerBase
    {
        // Removed hardcoded API key. Load from configuration or environment variable.
        // Priority: Environment variable OPENAI_API_KEY, then configuration key "OpenAI:ApiKey".
        private readonly string _apiKey;
        private const string EmbeddingModel = "text-embedding-3-small";
        private const string ChatModel = "gpt-3.5-turbo";

        public KaramController(IConfiguration configuration)
        {
            _apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY")
                      ?? configuration["OpenAI:ApiKey"]
                      ?? throw new InvalidOperationException("OpenAI API key not configured. Set OPENAI_API_KEY env var or OpenAI:ApiKey in configuration.");
        }

        [EnableRateLimiting("ProcessQueryPolicy")]
        [HttpPost("process-query")]
        public async Task<IActionResult> ProcessQuery(string userQuestion)
        {
            Console.WriteLine(userQuestion);
            if (string.IsNullOrWhiteSpace(userQuestion))
            {
                return BadRequest("Query cannot be empty.");
            }

            string embeddingsPath = Path.Combine(AppContext.BaseDirectory, "Helper", "resume_embeddings.json");
            if (!System.IO.File.Exists(embeddingsPath))
            {
                return NotFound("Embeddings file not found.");
            }

            var resumeEmbeddingsJson = System.IO.File.ReadAllText(embeddingsPath);
            var embeddingSections = JsonSerializer.Deserialize<List<EmbeddingSection>>(resumeEmbeddingsJson);

            if (embeddingSections == null || embeddingSections.Count == 0)
            {
                return StatusCode(500, "Embeddings data is invalid or empty.");
            }

            var vectorStore = new InMemoryVectorStore();
            foreach (var es in embeddingSections)
            {
                string combinedText = CombineSectionText(es.Section);
                vectorStore.Add(combinedText, es.Embedding);
            }

            var embedClient = new EmbeddingClient(EmbeddingModel, _apiKey);
            var questionEmbedding = ((OpenAIEmbedding)embedClient.GenerateEmbedding(userQuestion)).ToFloats().ToArray();

            var topChunks = vectorStore.GetRelevant(questionEmbedding, 3);
            var contextBuilder = new StringBuilder();
            foreach (var chunk in topChunks)
            {
                contextBuilder.AppendLine(chunk.Text);
                contextBuilder.AppendLine("-----");
            }
            string context = contextBuilder.ToString();

            var openAIService = new OpenAIService(new OpenAIOptions()
            {
                ApiKey = _apiKey
            });

            var completionResult = await openAIService.ChatCompletion.CreateCompletion(new ChatCompletionCreateRequest
            {
                Messages = new List<ChatMessage>
                {
                    ChatMessage.FromSystem("You are a helpful assistant with knowledge of my resume."),
                    ChatMessage.FromUser($"Context:\n{context}\n\nUser question:\n{userQuestion}"),
                },
                Model = ChatModel,
            });

            if (completionResult.Successful)
            {
                var result = completionResult.Choices.First().Message.Content;
                return Ok(new { answer = result });
            }

            return StatusCode(500, "Failed to process the query.");
        }

        private static string CombineSectionText(Section section)
        {
            var sb = new StringBuilder();
            sb.AppendLine(section.Title);

            if (!string.IsNullOrEmpty(section.Content))
            {
                sb.AppendLine(section.Content);
            }

            if (section.Entries != null)
            {
                foreach (var entry in section.Entries)
                {
                    sb.AppendLine($"Company/Institution: {entry.Company ?? entry.Institution}");
                    sb.AppendLine($"Role/Degree: {entry.Role ?? entry.Degree}");
                    sb.AppendLine($"Period: {entry.Period}");
                    sb.AppendLine($"Location: {entry.Location}");
                    if (entry.Description != null)
                    {
                        foreach (var bullet in entry.Description)
                        {
                            sb.AppendLine($"- {bullet}");
                        }
                    }
                }
            }

            if (section.ContactInformation != null)
            {
                sb.AppendLine($"Email: {section.ContactInformation.Email}");
                sb.AppendLine($"Mobile: {section.ContactInformation.Mobile}");
                sb.AppendLine($"LinkedIn: {section.ContactInformation.Linkedin}");
                sb.AppendLine($"GitHub: {section.ContactInformation.Github}");
            }

            return sb.ToString().Trim();
        }
    }
}
