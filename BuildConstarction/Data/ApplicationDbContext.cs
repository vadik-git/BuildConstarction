using BuildConstarction.Models;
using Microsoft.EntityFrameworkCore;

namespace BuildConstarction.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }

        public DbSet<OurProject> OurProjects { get; set; }
        public DbSet<ProjectImage> ProjectImages { get; set; }
    }
}
