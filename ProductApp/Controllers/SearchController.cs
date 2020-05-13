using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Domain;
using ProductApp.Models;
namespace ProductApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {

        public ProductDomain productDomain { get; set; }
        public SearchController()
        {
            this.productDomain = new ProductDomain();
        }
       
        [HttpPost]
        public IActionResult Post(vProducts products)
        {
            var productDetails = this.productDomain.Search(products);
            return Ok(productDetails);


        }

    }
}