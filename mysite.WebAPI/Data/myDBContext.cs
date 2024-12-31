using System;
using Microsoft.EntityFrameworkCore;
using mysite.Application.Models;

namespace mysite.Application.Data;

public class MyDbContext(DbContextOptions<MyDbContext> options) : DbContext(options)
{
    public DbSet<Blog> Blogs {get; set;}
}