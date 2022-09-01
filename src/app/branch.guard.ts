import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './Service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class BranchGuard implements CanActivate {
  constructor(private guard:AdminService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.guard.log5()){
        return true;
      }
    
      else{
    
      return false;
    
      }
    //return true;
  }
  
}
