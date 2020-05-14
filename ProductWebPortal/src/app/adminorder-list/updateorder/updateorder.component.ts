import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {
  orderId:any;
  result:any;
  updateorderFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId=this.activateRoute.snapshot.paramMap.get("orderId");
    this.updateorderFormGroup=this.formBuilder.group(
      {
        shipDate:'',
        status:''
      }
    )





  }
  update()
  {
   var status=parseInt(this.updateorderFormGroup.controls.status.value);
   
    this.http.put('https://localhost:44319/api/order',{
    OrderId:parseInt(this.orderId),
ShipDate:this.updateorderFormGroup.controls.shipDate.value,
      
      OrderStatus:status 
     
     
    }).subscribe(res=>{this.result=res;    
    
    });
    
  
    this.router.navigate(['/adminorderlist']);
   
  
  
  }
  
}
