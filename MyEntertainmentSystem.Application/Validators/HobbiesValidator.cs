using FluentValidation;
using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Application.Validators
{
    public class HobbiesValidator : AbstractValidator<Hobbies>
    {
        public HobbiesValidator() 
        {
        }
    }
}
