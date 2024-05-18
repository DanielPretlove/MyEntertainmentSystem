using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access.Repositories
{
    public interface IRepository
    {
        Task<IList<Hobbies>> GetAllAsync();
        Task<Hobbies> GetById(Guid id);
        Task<Hobbies> InsertAsync(Hobbies entity);
        Task UpdateAsync(Hobbies entity);
        Task<Hobbies> DeleteAsync(Guid id);
    }
}
