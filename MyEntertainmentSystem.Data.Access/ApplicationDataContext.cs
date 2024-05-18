using Microsoft.EntityFrameworkCore;
using MyEntertainmentSystem.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Access
{
    public class ApplicationDataContext : DbContext
    {
        public ApplicationDataContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var sb = new StringBuilder();
            base.OnModelCreating(modelBuilder);
            var dataEntity = Assembly
                    .GetAssembly(typeof(DataEntity))
                    .GetTypes()
                    .Where(a => a.BaseType == typeof(DataEntity));

            foreach (var entityType in dataEntity)
            {
                modelBuilder.Entity(entityType);
            }
        }
    }
}
