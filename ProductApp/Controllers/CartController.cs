using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Models;
using ProductApp.Domain;
namespace ProductApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {


        public CartDomain cartDomain { get; set; }
        public CartController()
        {
            this.cartDomain = new CartDomain();
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var m = this.cartDomain.Get(id);
            return Ok(m);

        }
        [HttpPost]
        public IActionResult Post(Carts carts)
        {
            cartDomain.Add(carts);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            cartDomain.Delete(id);
            return Ok();
        }

    }
}