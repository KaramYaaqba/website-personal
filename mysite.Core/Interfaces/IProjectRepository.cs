using System;
using mysite.Core.Entities;

namespace mysite.Core.Interfaces;

public interface IProjectRepository
{
    Project GetById(Guid id);
    IEnumerable<Project> GetAll();
    void Add(Project project);
    void Update(Project project);
    void Delete(Guid id);
}
