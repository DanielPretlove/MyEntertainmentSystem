using Microsoft.EntityFrameworkCore;
using MyEntertainmentSystem.Application.Mappers;
using MyEntertainmentSystem.Application.Services;
using MyEntertainmentSystem.Data.Access;
using MyEntertainmentSystem.Data.Access.Repositories;

namespace MyEntertainmentSystem.Server
{
    public static class ServiceRegistry
    {
        public static IServiceCollection ServiceRegistryContainer(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<HobbiesService>();
            services.AddScoped(typeof(IRepository), typeof(Repository));
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
