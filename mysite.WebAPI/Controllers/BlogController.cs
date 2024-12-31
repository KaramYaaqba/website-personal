using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mysite.Application.Data;

namespace mysite.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly MyDbContext _context;

        public BlogController(MyDbContext context){
            _context = context;
        }

        [HttpGet]
        public IActionResult GetBlogs()
        {
            return Ok(_context.Blogs.ToList());
        }
    }
}
