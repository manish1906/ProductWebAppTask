using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models
{
    public class vCart
    {
        public int CartId { get; set; }
        public int UserId { get; set; }
        public string ProductName { get; set; }
        public string ProductBrand { get; set; }
        public int Quantity { get; set; }
        public string ProductDescription { get; set; }
        public int TotalPrice { get; set; }

    }
}
