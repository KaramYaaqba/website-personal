using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.SpaServices;
using mysite.Core.Interfaces;
using mysite.Infrastructure.Repositories;
using mysite.Application.UseCases;
using mysite.Infrastructure.Data;
using Microsoft.AspNetCore.RateLimiting;
using System.Threading.RateLimiting;
using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IBlogRepository, BlogRepository>();
builder.Services.AddScoped<IProjectRepository, ProjectRepository>();
builder.Services.AddScoped<CreateBlogUseCase>();
builder.Services.AddScoped<CreateProjectUseCase>();
builder.Services.AddControllers();
// Enable the rate limiter services
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("ProcessQueryPolicy", httpContext =>
    {
        // Use the IP address as the partition key
        var clientIp = httpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";
        Console.WriteLine("Ip");
        Console.WriteLine(clientIp);
        return RateLimitPartition.GetFixedWindowLimiter(
            partitionKey: clientIp,
            factory: _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 2, // Allow 2 requests
                Window = TimeSpan.FromHours(1), // Per hour
                QueueLimit = 0,
                QueueProcessingOrder = QueueProcessingOrder.OldestFirst
            }
        );
    });
});
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "browser";
});
builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
        builder => builder
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .AllowAnyHeader()));
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=app.db"));


var app = builder.Build();
app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});
app.UseRateLimiter();
app.MapControllers();

app.Use(async (context, next) =>
{
    var clientIp = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
    Console.WriteLine($"Client IP: {clientIp}");
    Console.WriteLine($"Client IP: hello");
    await next();
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseSpaStaticFiles();

app.UseRouting();
app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "browser";
});


var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
