using System;
using Microsoft.EntityFrameworkCore;
using WebsiteAPI.Models;

namespace WebsiteAPI.Data;

public class MyDbContext(DbContextOptions<MyDbContext> options) : DbContext(options)
{
    public DbSet<Blog> Blogs {get; set;}
}