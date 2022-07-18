using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BuildConstarction.Models
{
    public class ProjectImage
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }


        public int OurProjectId { get; set; }

        [ForeignKey(nameof(OurProjectId))]
        public OurProject OurProject { get; set; }

    }
}
