// --------------------------------------------
// IN-MEMORY VECTOR STORE
// --------------------------------------------
public class InMemoryVectorStore
{
    // We'll store each chunk as (Text, float[] Embedding)
    private List<VectorRecord> _records = new();

    // Simple addition
    public void Add(string text, float[] embedding)
    {
        _records.Add(new VectorRecord
        {
            Text = text,
            Embedding = embedding
        });
    }

    // Retrieve the top N records by cosine similarity
    public List<VectorRecord> GetRelevant(float[] queryEmbedding, int topN)
    {
        // Compute (record, similarity) for each chunk
        var scored = new List<(VectorRecord record, float score)>();
        foreach (var r in _records)
        {
            float score = CosineSimilarity(queryEmbedding, r.Embedding);
            scored.Add((r, score));
        }

        // Sort descending by similarity
        scored.Sort((a, b) => b.score.CompareTo(a.score));

        // Return topN
        return scored.Take(topN).Select(x => x.record).ToList();
    }

    // Basic cosine similarity
    private float CosineSimilarity(float[] a, float[] b)
    {
        // Ensure same length
        if (a.Length != b.Length) return 0f;

        float dot = 0f;
        float normA = 0f;
        float normB = 0f;
        for (int i = 0; i < a.Length; i++)
        {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }

        return (float)(dot / (Math.Sqrt(normA) * Math.Sqrt(normB)));
    }

    public class VectorRecord
    {
        public string Text { get; set; }
        public float[] Embedding { get; set; }
    }
}


// --------------------------------------------
// CLASSES THAT MATCH YOUR JSON
// --------------------------------------------
public class EmbeddingSection
{
    public Section Section { get; set; }
    public float[] Embedding { get; set; }
}

public class Resume
{
    public List<Section> Sections { get; set; }
}

public class Section
{
    public string Title { get; set; }
    public string Content { get; set; }
    public List<Entry> Entries { get; set; }
    public ContactInformation ContactInformation { get; set; }
}

public class Entry
{
    public string Company { get; set; }
    public string Role { get; set; }
    public string Location { get; set; }
    public string Period { get; set; }
    public List<string> Description { get; set; }
    public string Degree { get; set; }
    public string Institution { get; set; }
}

public class ContactInformation
{
    public string Email { get; set; }
    public string Mobile { get; set; }
    public string Linkedin { get; set; }
    public string Github { get; set; }
}
