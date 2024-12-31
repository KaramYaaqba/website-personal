using System;
using mysite.Application.DTOs;
using mysite.Core.Entities;
using mysite.Core.Interfaces;

namespace mysite.Application.UseCases;

public class CreateBlogUseCase
{
    private readonly IBlogRepository _blogRepository;

    public CreateBlogUseCase(IBlogRepository blogRepository)
    {
        _blogRepository = blogRepository;
    }

    public void Execute(BlogDto blogDto)
    {
        var blog = new Blog
        {
            Id = Guid.NewGuid(),
            Title = blogDto.Title,
            Content = blogDto.Content,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };
        _blogRepository.Add(blog);
    }
}
