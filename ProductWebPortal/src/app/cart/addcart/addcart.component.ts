import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addcartFormGroup:FormGroup;
  id:any;
  result:any;
  productCode:any;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userid");
    this.productCode=this.activateRoute.snapshot.paramMap.get("productCode");
    this.addcartFormGroup=this.formbuilder.group(
      {
        quantity:['',Validators.required]
      }
    )
  }
  addcart()
  {
    this.http.post('https://localhost:44319/api/cart',{
      UserId:parseInt(this.id),
    ProductCode:parseInt(this.productCode),
      Quantity:this.addcartFormGroup.controls.quantity.value
    }).subscribe(res=>{this.result=res;
       
    });
    
  
    this.router.navigate(['/cart']);
   
  
  
  }

  }

