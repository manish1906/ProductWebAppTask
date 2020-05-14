import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminorder-list',
  templateUrl: './adminorder-list.component.html',
  styleUrls: ['./adminorder-list.component.css']
})
export class AdminorderListComponent implements OnInit {
  result:any;
  id:any;
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
    
      this.http.get('https://localhost:44319/api/order').subscribe(t => {
              this.result = t;
              console.log(this.result);
          });
      
  
    }

}
