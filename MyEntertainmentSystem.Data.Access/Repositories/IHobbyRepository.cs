using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public interface IHobbyRepository : IRepository<Hobbies>
    {
        Task<IList<Hobbies>> GetAllHobbiesAsync();
        Task<Hobbies?> GetHobbyById(Guid id);
        Task<IList<Hobbies>> GetTopFeaturedHobbiesAsync();
        Task UpdateFeaturedHobbyFlag(Guid id, bool featuredFlag);
    }
}
