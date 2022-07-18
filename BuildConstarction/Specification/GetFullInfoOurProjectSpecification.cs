using Ardalis.Specification;
using BuildConstarction.Models;

namespace BuildConstarction.Specification
{
    public class GetFullInfoOurProjectSpecification:Specification<OurProject>, ISingleResultSpecification<OurProject>
    {
        public GetFullInfoOurProjectSpecification()
        {
            Query.Include(_ => _.Images);
        }
    }
}
