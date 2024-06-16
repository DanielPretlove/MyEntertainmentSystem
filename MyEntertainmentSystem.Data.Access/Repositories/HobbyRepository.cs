using Microsoft.EntityFrameworkCore;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public class HobbyRepository : IHobbyRepository
    {
        private readonly ApplicationDataContext _context;

        public HobbyRepository(ApplicationDataContext context)
        {
            _context = context;
        }
        public async Task<IList<Hobbies>> GetTopFeaturedHobbiesAsync()
        {
            return await _context.Set<Hobbies>().Where(h => h.Featured).OrderByDescending(h => h.Featured).Take(5).ToListAsync();
        }

        public async Task UpdateFeaturedHobbyFlag(Guid id, bool featuredFlag)
        {
            var hobby = await _context.Set<Hobbies>().FindAsync(id);

            if(hobby != null)
            {
                hobby.Featured = featuredFlag;
                _context.Set<Hobbies>().Update(hobby);
                await _context.SaveChangesAsync();
            }
        }
    }
}
