﻿using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using MyEntertainmentSystem.Application.Mappers;
using MyEntertainmentSystem.Application.Services;
using MyEntertainmentSystem.Application.Validators;
using MyEntertainmentSystem.Data.Access;
using MyEntertainmentSystem.Data.Access.Repositories;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;

namespace MyEntertainmentSystem.Server
{
    public static class ServiceRegistry
    {
        public static IServiceCollection ServiceRegistryContainer(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<HobbiesService>();
            services.AddScoped(typeof(IGenericService<Hobbies>), typeof(GenericService<Hobbies>));
            services.AddScoped(typeof(IRepository<Hobbies>), typeof(Repository<Hobbies>));
            services.AddScoped(typeof(IHobbyRepository), typeof(HobbyRepository));
            services.AddFluentValidationAutoValidation().AddValidatorsFromAssemblyContaining<HobbiesValidator>();

            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            services.AddScoped(typeof(AutoMapper.Mapper));
            services.AddDbContext<ApplicationDataContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("EntertainmentSystem"), m => m.MigrationsAssembly("MyEntertainmentSystem.Data.Access"));
            });
            return services;
        }
    }
}
