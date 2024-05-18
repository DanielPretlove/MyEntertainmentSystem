using AutoMapper;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using MyEntertainmentSystem.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Application.Mappers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        {
            CreateMap<Hobbies, HobbiesListModel>();
            CreateMap<HobbiesListModel, Hobbies>();
        }
    }
}
