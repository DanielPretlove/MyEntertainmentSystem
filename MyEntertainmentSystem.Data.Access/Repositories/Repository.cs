using Microsoft.EntityFrameworkCore;
using MyEntertainmentSystem.Data.Entities;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public class Repository<T> : IRepository<T>
        where T: DataEntity
    {
        private readonly ApplicationDataContext _context;

        public Repository(ApplicationDataContext context)
        {
            _context = context;
        }

        public async Task<IList<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetById(Guid id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<T> InsertAsync(T entity)
        {
            var result = await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task UpdateAsync(T entity)
        {
            _context.Set<T>().Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task<T> DeleteAsync(Guid id)
        {
            var result = await _context.Set<T>().FindAsync(id);
            _context.Set<T>().Remove(result);
            await _context.SaveChangesAsync();
            return result;
        }
    }
}
