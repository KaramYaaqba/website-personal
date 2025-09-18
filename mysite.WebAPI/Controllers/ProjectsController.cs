using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mysite.Application.DTOs;
using mysite.Application.UseCases;

namespace mysite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly CreateProjectUseCase _createProjectUseCase;

        public ProjectsController(CreateProjectUseCase createProjectUseCase)
        {
            _createProjectUseCase = createProjectUseCase;
        }

        [HttpPost]
        public IActionResult CreateProject([FromBody] ProjectDto projectDto)
        {
            _createProjectUseCase.Execute(projectDto);
            return Ok();
        }
    }
}
