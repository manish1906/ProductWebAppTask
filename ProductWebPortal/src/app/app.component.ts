import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProductPortal';
home:boolean=false;
userid:any;
admin:any;
display:boolean=true;
user:boolean=true;
product:boolean=false;
constructor(private router:Router){}
ngOnInit(){

this.userid=sessionStorage.getItem("userid");
this.admin=sessionStorage.getItem("key");

console.log(this.userid,this.admin);
if(this.userid!=null && this.admin==null){
  this.user=false;
  this.home=true;
}
else if(this.userid==null && this.admin!=null)
{
  this.display=false;
  this.product=true;
  this.home=true;
}
}
logout()
 {
//this.display=false;
   sessionStorage.removeItem("key");
   sessionStorage.removeItem("userid");
 this.router.navigate(['/userlogin'])
  //window.location.reload();
 }


}
