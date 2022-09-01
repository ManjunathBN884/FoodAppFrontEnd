import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { BranchGuard } from './branch.guard';
import { BranchComponent } from './branch/branch.component';
import { FoodProductsComponent } from './food-products/food-products.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginBranchManagerComponent } from './login-branch-manager/login-branch-manager.component';
import { LoginStaffComponent } from './login-staff/login-staff.component';
import { ManagerRegistrationComponent } from './manager-registration/manager-registration.component';
import { ManagerGuard } from './manager.guard';
import { ProductGuard } from './product.guard';
import { SaveFoodOrderComponent } from './save-food-order/save-food-order.component';
import { SaveFoodProductComponent } from './save-food-product/save-food-product.component';
import { SaveMenuComponent } from './save-menu/save-menu.component';
import { StaffGuardGuard } from './staff-guard.guard';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { StaffComponent } from './staff/staff.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [{path:"reg",component:AdminRegistrationComponent},
{path:"log",component:LoginAdminComponent},
{path:"branch",component:BranchComponent,canActivate:[BranchGuard]},
{path:"menu",component:BranchManagerComponent,canActivate:[ManagerGuard]},
{path:"staff",component:StaffComponent,canActivate:[StaffGuardGuard]},
{path:"order",component:SaveFoodOrderComponent,canActivate:[StaffGuardGuard]},
{path:"regStaff",component:StaffRegistrationComponent},
{path:"updateMenu/:id",component:UpdateMenuComponent,canActivate:[ProductGuard]},
{path:"saveProduct",component:SaveFoodProductComponent,canActivate:[ProductGuard]},
{path:"products",component:FoodProductsComponent,canActivate:[ProductGuard]},
{path:"updateProduct/:id",component:UpdateProductComponent},
{path:"home",component:HomeComponent},
{path:"Loginstaff",component:LoginStaffComponent},
{path:"regManager",component:ManagerRegistrationComponent},
{path:"Loginmanager",component:LoginBranchManagerComponent},
{path:"addBranch",component:AddBranchComponent,canActivate:[BranchGuard]},
{path:"updateBranch/:id",component:UpdateBranchComponent,canActivate:[BranchGuard]},
{path:"updateOrder/:id",component:UpdateOrderComponent},
{path:"saveMenu",component:SaveMenuComponent,canActivate:[ProductGuard]},
{path:"account",component:AccountComponent},
{path:"updateAdmin/:id",component:UpdateAdminComponent}]
//  {path:"",redirectTo:"home"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
