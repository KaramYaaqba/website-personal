using System;
using mysite.Core.Entities;
using mysite.Core.Interfaces;
using mysite.Infrastructure.Data;

namespace mysite.Infrastructure.Repositories;

public class BlogRepository : IBlogRepository
{
    private readonly ApplicationDbContext _context;

    public BlogRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public Blog GetById(Guid id) => _context.Blogs.Find(id);

    public IEnumerable<Blog> GetAll() => _context.Blogs.ToList();

    public void Add(Blog blog)
    {
        _context.Blogs.Add(blog);
        _context.SaveChanges();
    }

    public void Update(Blog blog)
    {
        _context.Blogs.Update(blog);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var blog = GetById(id);
        if (blog != null)
        {
            _context.Blogs.Remove(blog);
            _context.SaveChanges();
        }
    }
}
