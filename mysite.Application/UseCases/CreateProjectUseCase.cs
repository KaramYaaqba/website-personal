using System;
using mysite.Application.DTOs;
using mysite.Core.Entities;
using mysite.Core.Interfaces;

namespace mysite.Application.UseCases;

public class CreateProjectUseCase
{
    private readonly IProjectRepository _projectRepository;

    public CreateProjectUseCase(IProjectRepository projectRepository)
    {
        _projectRepository = projectRepository;
    }

    public void Execute(ProjectDto projectDto)
    {
        var project = new Project
        {
            Id = Guid.NewGuid(),
            Name = projectDto.Name,
            Description = projectDto.Description,
            StartDate = projectDto.StartDate,
            EndDate = projectDto.EndDate,
            IsCompleted = projectDto.IsCompleted
        };
        _projectRepository.Add(project);
    }
}
