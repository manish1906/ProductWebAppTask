import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './customer/register/register.component';
import { LoginComponent } from './customer/login/login.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './customer/update/update.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { UserProductComponent } from './user-product/user-product.component';
import { CartComponent } from './cart/cart.component';
import { AddcartComponent } from './cart/addcart/addcart.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminorderListComponent } from './adminorder-list/adminorder-list.component';
import { UpdateorderComponent } from './adminorder-list/updateorder/updateorder.component';
const routes: Routes = [
  
    // { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register' ,component: RegisterComponent },
{ path: 'product' ,component: ProductComponent },
{ path: 'customer' ,component: CustomerComponent },
{ path: 'updatecustomer/:customerCode/:firstName/:lastName/:mobileNumber/:email/:gender/:dob/:address/:password' ,component: UpdateComponent },
{ path: 'addproduct' ,component: AddproductComponent },
{ path: 'updateproduct/:productCode/:productName/:productBrand/:productPrice/:productDescription/:productStatus' ,component: UpdateproductComponent },
{ path: 'userlogin' ,component: UserLoginComponent },
{ path: 'user' ,component: UserComponent },
{ path: 'updateuser/:userId/:firstName/:lastName/:mobileNumber/:email/:gender/:dob/:address/:password' ,component:UserupdateComponent  },
{ path: 'userregister' ,component: UserRegisterComponent },
{ path: 'userproduct' ,component: UserProductComponent },
{ path: 'cart' ,component: CartComponent },
{ path: 'addcart/:productCode' ,component: AddcartComponent },
{ path: 'order/:cartId' ,component: OrdersComponent},
{ path: 'order' ,component: OrdersComponent},

{ path: 'updateorder/:orderId' ,component:UpdateorderComponent},
{ path: 'adminorderlist' ,component: AdminorderListComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
