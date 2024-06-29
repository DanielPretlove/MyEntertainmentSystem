using MyEntertainmentSystem.Data.Access.Repositories;
using MyEntertainmentSystem.Data.Entities;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Application.Services
{
    public interface IGenericService<T> where T : DataEntity
    {
        Task<IList<T>> GetAll();
        Task<T?> GetById(Guid id);
        Task<T> Insert(T data);
        Task Update(T data);
        Task Delete(Guid id);
    }
}
