using MyEntertainmentSystem.Data.Access.Repositories;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Application.Services
{
    public class PopularHobbiesService
    {

        private readonly IHobbyRepository _repository;

        public PopularHobbiesService(IHobbyRepository repository)
        {
            _repository = repository;
        }

        public async Task<IList<Hobbies>> FeaturedHobbies()
        {
            return await _repository.GetTopFeaturedHobbiesAsync();
        }

        // add as Featured

        public async Task UpdateFeaturedHobby(Guid id, bool featuredFlag)
        {
            await _repository.UpdateFeaturedHobbyFlag(id, featuredFlag);
        }
    }
}
