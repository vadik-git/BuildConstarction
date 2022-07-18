using Ardalis.Specification;

namespace BuildConstarction.AggregateRoot
{
    public interface IReadRepository<T> : IReadRepositoryBase<T> where T : class, IAggregateRoot
    {
    }
}
