import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent implements OnInit {

  constructor(private staff:AdminService) { }
// loginId:any
  ngOnInit(): void {
  }
  data:any;
  logUser(form:NgForm){
      console.log(form.value);
  this.staff.loginStaff(form.value).subscribe((res)=>{
    console.log(res);
    this.data=res;
    console.log(this.data.role);
    console.log(this.data.id);
    localStorage.setItem('id',this.data.id)
    localStorage.setItem('role',this.data.role);
    window.alert("Staff Logged-in Successfully")
  })
      
      }
}
