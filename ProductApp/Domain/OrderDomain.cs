using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApp.Models;
namespace ProductApp.Domain
{
    public class OrderDomain:BaseDomain
    {


        public List<vOrders> GetAllOrder()
        {

            var reader = this.GetReader($"select *from vOrders");

            var vOrders = new List<vOrders>();
            while (reader.Read())
            {
                var vOrders1 = new vOrders();
                vOrders1.OrdderId = reader.GetInt32(0);
                vOrders1.UserId = reader.GetInt32(1);
                vOrders1.ProductName = reader.GetString(2);
                vOrders1.ProductBrand = reader.GetString(3);
                vOrders1.ProductDescription = reader.GetString(4);
                vOrders1.TotalPrice = reader.GetInt32(5);
                vOrders1.OrderDate = reader.GetDateTime(6);
                vOrders1.ShipDate = reader.GetDateTime(7);
                vOrders1.Address = reader.GetString(8);
                vOrders1.OrderStatus = reader.GetString(9);

                vOrders.Add(vOrders1);

            }
            return vOrders;
        }




        public List<vOrders> Get(int id)
        {

            var reader = this.GetReader($"select *from vOrders where userid={id}");

            var vOrders = new List<vOrders>();
            while (reader.Read())
            {
                var vOrders1 = new vOrders();
                vOrders1.OrdderId = reader.GetInt32(0);
                vOrders1.UserId = reader.GetInt32(1);
                vOrders1.ProductName = reader.GetString(2);
                vOrders1.ProductBrand = reader.GetString(3);
                vOrders1.ProductDescription = reader.GetString(4);
                vOrders1.TotalPrice = reader.GetInt32(5);
                vOrders1.OrderDate = reader.GetDateTime(6);
                vOrders1.ShipDate = reader.GetDateTime(7);
                vOrders1.Address = reader.GetString(8);
                vOrders1.OrderStatus = reader.GetString(9);

                vOrders.Add(vOrders1);

            }
            return vOrders;
        }




        public void Add(Orders orders)
        {
            this.ExecuteNonQuery($"insert into orders(cartid) values ({orders.CartId}) " );
        }
        public void Update(Orders orders)
        {
            this.ExecuteNonQuery($"update orders set ShipDate=convert(date,'{orders.ShipDate}',104),OrderStatus={orders.OrderStatus} where OrderId = {orders.OrderID}");
        }

    }
}
