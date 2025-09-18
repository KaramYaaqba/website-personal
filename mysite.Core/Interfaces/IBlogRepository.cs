using System;
using mysite.Core.Entities;

namespace mysite.Core.Interfaces;

public interface IBlogRepository
{
    Blog GetById(Guid id);
    IEnumerable<Blog> GetAll();
    void Add(Blog blog);
    void Update(Blog blog);
    void Delete(Guid id);
}
