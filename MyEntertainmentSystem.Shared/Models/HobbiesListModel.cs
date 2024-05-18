using MyEntertainmentSystem.Data.Entities.HobbyCategories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Shared.Models
{
    public class HobbiesListModel
    {
        public HobbiesEnumType Type { get; set; }
        public CompletionStateEnum CompletionState { get; set; }
        public required string Name { get; set; }
        public string? Episodes { get; set; }
    }
}
