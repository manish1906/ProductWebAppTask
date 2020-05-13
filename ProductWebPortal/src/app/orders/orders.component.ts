import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  result:any;
  id:any;
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
      this.id=sessionStorage.getItem("key");
      this.http.get('https://localhost:44319/api/order/'+this.id).subscribe(t => {
              this.result = t;
              console.log(this.result);
          });
      
  
    }
  
}
