using ProductAPI.Interfaces;
using ProductAPI.Models;

namespace ProductAPI.Services;

public class ProductService : IProductService
{
    public IEnumerable<Product> GetAll()
    {
        return new List<Product>
        {
            new Product { Id = 1, Name = "Wireless Mouse", Price = 25.99M },
            new Product { Id = 2, Name = "Mechanical Keyboard", Price = 89.50M },
            new Product { Id = 3, Name = "27\" Monitor", Price = 229.99M },
            new Product { Id = 4, Name = "Printer-Monitor", Price = 259.99M }
        };
    }
}

