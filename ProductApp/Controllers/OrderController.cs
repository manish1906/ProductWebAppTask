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
    public class OrderController : ControllerBase
    {
        public OrderDomain orderDomain { get; set; }
        public OrderController()
        {

            this.orderDomain = new OrderDomain();
        }

        [HttpGet]
        public IActionResult Get()
        {
            var order = this.orderDomain.GetAllOrder();
            return Ok(order);

        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var order=this.orderDomain.Get(id);
            return Ok(order);
        
        }
        [HttpPost]
        public IActionResult Post(Orders orders)
        {
          orderDomain.Add(orders);
            return Ok();
        
        
        }
        [HttpPut]
        public IActionResult Put(Orders orders)
        {
            orderDomain.Update(orders);
            return Ok();
        }

    }
}