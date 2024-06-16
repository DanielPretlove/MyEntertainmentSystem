using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public interface IHobbyRepository
    {
        Task<IList<Hobbies>> GetTopFeaturedHobbiesAsync();
        Task UpdateFeaturedHobbyFlag(Guid id, bool featuredFlag);
    }
}
