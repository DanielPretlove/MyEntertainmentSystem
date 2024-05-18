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
        public async Task<ActionResult<IList<Hobbies>>> GetList()
        {
            var result = await _service.GetAll();
            return Ok(result);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Hobbies>> GetById(Guid id)
        {
            var result = await _service.GetById(id);
            if (result == null)
            {
                return NotFound();
            }

            else
            {
                return Ok(result);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Hobbies>> InsertAnime(Hobbies data)
        {
            var result = await _service.Insert(data);
            return Ok(result);
        }

        [HttpPut]
        public async Task UpdateAnime(Hobbies data)
        {
            await _service.Update(data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Hobbies>> DeleteAnime(Guid id)
        {
            var result = await _service.Delete(id);
            return Ok(result);
        }
    }
}
