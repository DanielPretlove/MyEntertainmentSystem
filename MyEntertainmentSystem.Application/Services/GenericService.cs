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
    public class GenericService<T> : IGenericService<T> where T : DataEntity
    {
        private readonly IRepository<T> _repository;

        public GenericService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public async Task<IList<T>> GetAll()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<T?> GetById(Guid id)
        {
            return await _repository.GetById(id);
        }

        public async Task<T> Insert(T data)
        {
            return await _repository.InsertAsync(data);
        }

        public async Task Update(T data)
        {
            await _repository.UpdateAsync(data);
        }

        public async Task Delete(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
