using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEntertainmentSystem.Data.Entities.HobbyCategories
{
    public class Hobbies : DataEntity
    {
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required string ImagePath { get; set; }
        public string? Episodes { get; set; }

        [DefaultValue(false)]
        public bool Featured { get; set; } = false;
        public HobbiesEnumType Type { get; set; }
        public CompletionStateEnum CompletionState { get; set; }
    }
}
