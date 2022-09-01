import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-manager-registration',
  templateUrl: './manager-registration.component.html',
  styleUrls: ['./manager-registration.component.css']
})
export class ManagerRegistrationComponent implements OnInit {

  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value);  
    this.service.addManager(form.value).subscribe((res)=>{
      console.log(res);
      window.alert("Manager Registerd Successfully")
    })
  }
}
