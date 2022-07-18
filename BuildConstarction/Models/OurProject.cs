using BuildConstarction.AggregateRoot;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BuildConstarction.Models
{
    public class OurProject : IAggregateRoot
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }


        public ICollection<ProjectImage> Images { get; set; }


    }
}
