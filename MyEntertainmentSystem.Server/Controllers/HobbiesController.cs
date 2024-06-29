using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyEntertainmentSystem.Application.Services;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;

namespace MyEntertainmentSystem.Server.Controllers
{
    public class HobbiesController : BaseApiControlller
    {
        private readonly HobbiesService _service;
        private readonly Mapper _mapper;


        public HobbiesController(HobbiesService service, Mapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("list")]
        [AllowAnonymous]
        public async Task<ActionResult<IList<Hobbies>>> GetHobbyList()
        {
            var result = await _service.GetAllHobbies();
            return Ok(result);
        }


        [HttpPost]
        public async Task<ActionResult<Hobbies>> InsertHobby(Hobbies data)
        {
            var result = await _service.Insert(data);
            return Ok(result);
        }

        [HttpPut]
        public async Task UpdateHobby(Hobbies data)
        {
            await _service.Update(data);
        }

        [HttpDelete("{id}")]
        public async Task DeleteHobby(Guid id)
        {
            await _service.Delete(id);
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
            var hobby = await _service.GetHobbyById(id);
            if (hobby == null)
            {
                return NotFound();
            }

            await _service.UpdateFeaturedHobby(id, hasFlag);
            return NoContent();
        }
    }
}
