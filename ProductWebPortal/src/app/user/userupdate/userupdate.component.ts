import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
userId:any;
  firstName:string;
  lastName: string;
  email: string;
  mobileNumber: any;
  gender:any;
  address:string;
  DOB:any;
  result:any;
  password:any;
  
 userupadteFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private activateRoute:ActivatedRoute,private router:Router , private http:HttpClient) { }

  ngOnInit() {
     this.userId=this.activateRoute.snapshot.paramMap.get("userId");
    this.firstName=this.activateRoute.snapshot.paramMap.get("firstName");
    this.lastName=this.activateRoute.snapshot.paramMap.get("lastName");
    this.mobileNumber=this.activateRoute.snapshot.paramMap.get("mobileNumber");
    this.email=this.activateRoute.snapshot.paramMap.get("email");
    this.gender=this.activateRoute.snapshot.paramMap.get("gender");
   this.DOB=this.activateRoute.snapshot.paramMap.get("DOB");
   this.address=this.activateRoute.snapshot.paramMap.get("address");
   this.password=this.activateRoute.snapshot.paramMap.get("password");
    this.userupadteFormGroup=this.formBuilder.group({
      firstName:[this.firstName,Validators.required],
      lastName:[this.lastName,Validators.required],
      mobileNumber:[this.mobileNumber,Validators.required],
      email:[this.email,Validators.required],
     gender:[this.gender,Validators.required],
     dateOfBirth:[this.DOB,Validators.required],
      address:[this.address,Validators.required],
      password:[this.password,Validators.required]



    })
  }
update()
{
  var gender=parseInt(this.userupadteFormGroup.controls.gender.value)
  var mn=parseInt(this.userupadteFormGroup.controls.mobileNumber.value);
this.http.put('https://localhost:44319/api/user',{
  UserId:parseInt(this.userId),
    FirstName:this.userupadteFormGroup.controls.firstName.value,
    LastName:this.userupadteFormGroup.controls.lastName.value,
    MobileNumber:mn,
    Email:this.userupadteFormGroup.controls.email.value,
     Gender:gender,
      Address:this.userupadteFormGroup.controls.address.value,
      DOB:this.userupadteFormGroup.controls.dateOfBirth.value,
      Password:this.userupadteFormGroup.controls.password.value
   
  }).subscribe(res=>{this.result=res;
   
  });
this.router.navigate(['/user']);


}


}
