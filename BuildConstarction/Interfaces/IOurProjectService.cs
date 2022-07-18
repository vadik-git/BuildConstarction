using BuildConstarction.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BuildConstarction.Interfaces
{
    public interface IOurProjectService
    {

        Task<IEnumerable<OurProject>> GetAllAsync();
        //Task CreateAsync(BasketCreateRequest request, string userId);
       // Task UpdateAsync(int basketId, BasketUpdateRequest request, string userId);
        Task DeleteAsync(int id);

    }
}
