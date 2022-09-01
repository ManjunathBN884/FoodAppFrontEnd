import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private admin:AdminService,private root:Router) { }

  ngOnInit(): void {
  }
submit(form:NgForm){
  console.log(form.value);  
  this.admin.addAdmin(form.value).subscribe((res)=>{
    console.log(res);
    window.alert("Admin Registerd Successfully")

  })
}
}
