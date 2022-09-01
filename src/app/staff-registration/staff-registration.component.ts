import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Service/admin.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrls: ['./staff-registration.component.css']
})
export class StaffRegistrationComponent implements OnInit {
staff=new Staff()
  constructor(private savestaff:AdminService) { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value);  
    this.savestaff.saveStaff(form.value).subscribe((res)=>{
      console.log(res);
    })

}
}
