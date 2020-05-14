using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models
{
    public class Orders
    {
        public int OrderID { get; set; }
        public int CartId { get; set; }
        public DateTime OrderDate { get; set; }
     
        public DateTime ShipDate { get; set; }
        public int OrderStatus { get; set; }
    }
}
