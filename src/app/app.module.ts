import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { BranchComponent } from './branch/branch.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { StaffComponent } from './staff/staff.component';
import { SaveFoodOrderComponent } from './save-food-order/save-food-order.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { FoodProductsComponent } from './food-products/food-products.component';
import { SaveFoodProductComponent } from './save-food-product/save-food-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HomeComponent } from './home/home.component';
import { LoginStaffComponent } from './login-staff/login-staff.component';
import { LoginBranchManagerComponent } from './login-branch-manager/login-branch-manager.component';
import { ManagerRegistrationComponent } from './manager-registration/manager-registration.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { SaveMenuComponent } from './save-menu/save-menu.component';
import { AccountComponent } from './account/account.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminRegistrationComponent,
    LoginAdminComponent,
    BranchComponent,
    BranchManagerComponent,
    StaffComponent,
    SaveFoodOrderComponent,
    UpdateMenuComponent,
    StaffRegistrationComponent,
    FoodProductsComponent,
    SaveFoodProductComponent,
    UpdateProductComponent,
    HomeComponent,
    LoginStaffComponent,
    LoginBranchManagerComponent,
    ManagerRegistrationComponent,
    AddBranchComponent,
    UpdateBranchComponent,
    UpdateOrderComponent,
    SaveMenuComponent,
    AccountComponent,
    UpdateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
