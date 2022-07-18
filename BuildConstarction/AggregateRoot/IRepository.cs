using Ardalis.Specification;

namespace BuildConstarction.AggregateRoot
{
    public interface IRepository<T> : IRepositoryBase<T> where T : class, IAggregateRoot
    {
    }
}
