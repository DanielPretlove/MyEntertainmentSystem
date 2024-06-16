using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyEntertainmentSystem.Application.Services;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;

namespace MyEntertainmentSystem.Server.Controllers
{
    public class FeaturedHobbiesController : BaseApiControlller
    {
        private readonly HobbiesService _hobbyService;
        private readonly PopularHobbiesService _service;

        public FeaturedHobbiesController(PopularHobbiesService service, HobbiesService hobbyService)
        {
            _service = service;
            _hobbyService = hobbyService;
        }


        [HttpGet("/popularHobbies")]
        public async Task<ActionResult<IList<Hobbies>>> PopularHobbies()
        {
            var result = await _service.FeaturedHobbies();
            return Ok(result);
        }

        [HttpPut("update-flag/{id}")]
        public async Task<IActionResult> UpdateHasFlag(Guid id, bool hasFlag)
        {
            var hobby = await _hobbyService.GetById(id);
            if (hobby == null)
            {
                return NotFound();
            }

            await _service.UpdateFeaturedHobby(id, hasFlag);
            return NoContent();
        }
    }
}
