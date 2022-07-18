using Ardalis.Specification.EntityFrameworkCore;
using BuildConstarction.Data;

namespace BuildConstarction.AggregateRoot
{
    public class EfRepository<T> : RepositoryBase<T>, IReadRepository<T>, IRepository<T> where T : class, IAggregateRoot
    {
        public EfRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
