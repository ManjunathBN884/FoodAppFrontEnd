import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-login-branch-manager',
  templateUrl: './login-branch-manager.component.html',
  styleUrls: ['./login-branch-manager.component.css']
})
export class LoginBranchManagerComponent implements OnInit {

  constructor(private manager:AdminService) { }
loginId:any
  ngOnInit(): void {
  }
  data:any;
  logUser(form:NgForm){
      console.log(form.value);
  this.manager.loginManager(form.value).subscribe((res)=>{
    console.log(res);
    this.data=res;
    console.log(this.data.role);
    console.log(this.data.id);
    
    localStorage.setItem('role',this.data.role);
    localStorage.setItem('id',this.data.id);
    window.alert("Branch Manager Logged-in Successfully")
  })
      
      }
}
