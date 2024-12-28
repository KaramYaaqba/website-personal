using Microsoft.EntityFrameworkCore;
using WebsiteAPI.Data;
using WebsiteAPI.Models;
using Microsoft.AspNetCore.SpaServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
        builder => builder
        .AllowAnyMethod()
        .AllowAnyHeader()));
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlite("Data Source=app.db"));

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Middleware to set the SPA root path dynamically
app.Use(async (context, next) =>
{
    // Determine the SPA folder based on the domain
    var spaPath = context.Request.Host.Host.Contains("v1.iamkaram.com") 
        ? "browserV1" 
        : "browser";

    // Set the environment variable to use later in SPA configuration
    context.Items["SpaSourcePath"] = spaPath;

    await next();
});

app.UseStaticFiles();
app.UseRouting();
app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseSpa(spa =>
{
    // Retrieve the SPA source path from the middleware
    var spaSourcePath = app.Services.GetRequiredService<IHttpContextAccessor>()
                          ?.HttpContext?.Items["SpaSourcePath"] as string;

    spa.Options.SourcePath = spaSourcePath ?? "browser";
});

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
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
