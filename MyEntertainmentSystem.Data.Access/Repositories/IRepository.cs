using MyEntertainmentSystem.Data.Entities;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public interface IRepository<T> where T : DataEntity
    {
        Task<IList<T>> GetAllAsync();
        Task<T?> GetById(Guid id);
        Task<T> InsertAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(Guid id);
    }
}
