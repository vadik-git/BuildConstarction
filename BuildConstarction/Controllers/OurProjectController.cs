using BuildConstarction.Interfaces;
using BuildConstarction.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BuildConstarction.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OurProjectController: Controller
    {
        private readonly OurProjectService _ourProjectService;
        public OurProjectController(OurProjectService ourProjectService)
        {
            _ourProjectService = ourProjectService;
        }


        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            var result = await _ourProjectService.GetAllAsync();
            
            return Ok(new JsonResult(result));
        }



    }
}
