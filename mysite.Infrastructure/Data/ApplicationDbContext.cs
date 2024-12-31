using System;
using Microsoft.EntityFrameworkCore;
using mysite.Core.Entities;

namespace mysite.Infrastructure.Data;
public class ApplicationDbContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Project> Projects { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}
