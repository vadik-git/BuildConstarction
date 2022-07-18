using AutoMapper;
using BuildConstarction.AggregateRoot;
using BuildConstarction.Interfaces;
using BuildConstarction.Models;
using BuildConstarction.Specification;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BuildConstarction.Services
{
    public class OurProjectService : IOurProjectService
    {
        private readonly IRepository<OurProject> _ourProjectRepository;
        public OurProjectService(IRepository<OurProject> ourProjectRepository)
        {
            _ourProjectRepository = ourProjectRepository;
            
        }
        public Task DeleteAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<OurProject>> GetAllAsync()
        {
            var spec = new GetFullInfoOurProjectSpecification();
            var ourProjects = await _ourProjectRepository.ListAsync(spec);

            return ourProjects;
        }
    }
}
