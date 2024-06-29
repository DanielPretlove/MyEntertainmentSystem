using MyEntertainmentSystem.Data.Access.Repositories;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Application.Services
{
    public class HobbiesService : GenericService<Hobbies>, IHobbiesService
    {

        private readonly IHobbyRepository _repository;

        public HobbiesService(IHobbyRepository repository) : base(repository)
        {
            _repository = repository;
        }

        public async Task<IList<Hobbies>> GetAllHobbies()
        {
            return await _repository.GetAllHobbiesAsync();
        }

        public async Task<Hobbies?> GetHobbyById(Guid id)
        {
            return await _repository.GetHobbyById(id);
        }
        public async Task<IList<Hobbies>> FeaturedHobbies()
        {
            return await _repository.GetTopFeaturedHobbiesAsync();
        }

        public async Task UpdateFeaturedHobby(Guid id, bool featuredFlag)
        {
            await _repository.UpdateFeaturedHobbyFlag(id, featuredFlag);
        }
    }
}
