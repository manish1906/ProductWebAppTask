using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models
{
    public class vOrders
    {
        public int OrdderId { get; set; }
        public int UserId { get; set; }
        public string ProductName { get; set; }
        public string ProductBrand { get; set; }
        public string ProductDescription { get; set; }
        public int TotalPrice  { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime ShipDate { get; set; }
        public string Address { get; set; }
        public string OrderStatus { get; set; }
        public int Quantity { get; set; }
    }
}
