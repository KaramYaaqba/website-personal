using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mysite.Application.DTOs;
using mysite.Application.UseCases;

namespace mysite.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
       private readonly CreateBlogUseCase _createBlogUseCase;

        public BlogsController(CreateBlogUseCase createBlogUseCase)
        {
            _createBlogUseCase = createBlogUseCase;
        }

        [HttpPost]
        public IActionResult CreateBlog([FromBody] BlogDto blogDto)
        {
            _createBlogUseCase.Execute(blogDto);
            return Ok();
        }
    }
}
