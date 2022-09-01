import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private admin:AdminService) { }
loginId:any
  ngOnInit(): void {
  }
  data:any;
  logUser(form:NgForm){
      console.log(form.value);
  this.admin.login(form.value).subscribe((res)=>{
    console.log(res);
    this.data=res;
    console.log(this.data.role);
    console.log(this.data.id);
    
    localStorage.setItem('role',this.data.role);
    localStorage.setItem('id',this.data.id);
    window.alert("Admin Logged-in Successfully")
  })
      
      }
  }
