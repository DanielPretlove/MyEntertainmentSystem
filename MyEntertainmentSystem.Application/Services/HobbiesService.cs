using MyEntertainmentSystem.Data.Access.Repositories;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Application.Services
{
    public class HobbiesService
    {
        private readonly IRepository _repository;

        public HobbiesService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<IList<Hobbies>> GetAll()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Hobbies> GetById(Guid id)
        {
            return await _repository.GetById(id);
        }

        public async Task<Hobbies> Insert(Hobbies data)
        {
            return await _repository.InsertAsync(data);
        }

        public async Task Update(Hobbies data)
        {
            await _repository.UpdateAsync(data);
        }

        public async Task<Hobbies> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}
