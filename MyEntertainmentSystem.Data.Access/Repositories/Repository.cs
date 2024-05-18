using Microsoft.EntityFrameworkCore;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public class Repository : IRepository
    {
        private readonly ApplicationDataContext _context;

        public Repository(ApplicationDataContext context)
        {
            _context = context;
        }

        public async Task<IList<Hobbies>> GetAllAsync()
        {
            return await _context.Set<Hobbies>().ToListAsync();
        }

        public async Task<Hobbies> GetById(Guid id)
        {
            return await _context.Set<Hobbies>().FindAsync(id);
        }

        public async Task<Hobbies> InsertAsync(Hobbies entity)
        {
            var result = await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task UpdateAsync(Hobbies entity)
        {
            _context.Set<Hobbies>().Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task<Hobbies> DeleteAsync(Guid id)
        {
            var result = await _context.Set<Hobbies>().FindAsync(id);
            _context.Set<Hobbies>().Remove(result);
            await _context.SaveChangesAsync();
            return result;
        }
    }
}
