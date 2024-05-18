using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Entities.HobbyCategories
{
    public class Hobbies : DataEntity
    {
        public HobbiesEnumType Type { get; set; }
        public CompletionStateEnum CompletionState { get; set; }
        public required string Name { get; set; }
        public string? Episodes { get; set; }
    }
}
