using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApp.Models;
namespace ProductApp.Domain
{
    public class CartDomain:BaseDomain
    {


        public List<vCart> Get(int id)
        {

            var reader = this.GetReader($"select *from vCart where userid={id} order by cartid");
            
            var vCarts = new List<vCart>(); 
            while (reader.Read())
            {
                var vCarts1 = new vCart();
                vCarts1.CartId = reader.GetInt32(0);
                vCarts1.ProductName = reader.GetString(2);
                vCarts1.ProductBrand = reader.GetString(3);
              
                vCarts1.ProductDescription = reader.GetString(4);
                vCarts1.TotalPrice = reader.GetInt32(5);
                vCarts1.Quantity = reader.GetInt32(6);
                vCarts.Add(vCarts1);

            }
            return vCarts;
        }

        public void Add(Carts carts)
        {
            this.ExecuteNonQuery($"exec spCart {carts.UserId},{carts.ProductCode},{carts.Quantity}");
        }
        public void Delete(int id)
        {
            this.ExecuteNonQuery($"delete from carts where cartid = {id}");
        }











    }
}
