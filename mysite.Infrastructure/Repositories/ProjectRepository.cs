using System;
using mysite.Core.Entities;
using mysite.Core.Interfaces;
using mysite.Infrastructure.Data;

namespace mysite.Infrastructure.Repositories;

public class ProjectRepository : IProjectRepository
{
    private readonly ApplicationDbContext _context;

    public ProjectRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public Project GetById(Guid id) => _context.Projects.Find(id);

    public IEnumerable<Project> GetAll() => _context.Projects.ToList();

    public void Add(Project project)
    {
        _context.Projects.Add(project);
        _context.SaveChanges();
    }

    public void Update(Project project)
    {
        _context.Projects.Update(project);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var project = GetById(id);
        if (project != null)
        {
            _context.Projects.Remove(project);
            _context.SaveChanges();
        }
    }
}
