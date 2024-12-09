using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebsiteAPI.Data;

namespace WebsiteAPI.Controllers
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
