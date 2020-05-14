import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
result:any;
id:any;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userid");
    this.http.get('https://localhost:44319/api/cart/'+this.id).subscribe(t => {
            this.result = t;
            console.log(this.result);
        });
    

  }
  delete(id:number )
  {
  this.http.delete('https://localhost:44319/api/cart/'+id).subscribe(t => {
    this.result = t;
  });
  window.location.reload();
  
  }
  order(cart:number)
  {
    this.http.post('https://localhost:44319/api/order',
    {CartId:cart}).subscribe(t => {
      this.result = t;
    });
   
    this.router.navigate(['/order']);

  }
}
