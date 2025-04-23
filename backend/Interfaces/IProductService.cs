using ProductAPI.Models;

namespace ProductAPI.Interfaces;

public interface IProductService
{
    IEnumerable<Product> GetAll();
}

