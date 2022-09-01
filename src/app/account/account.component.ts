import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
admin=new Admin();
  constructor(private service:AdminService) { }
//id:any
result:any
loginId=localStorage.getItem('id')
  ngOnInit(): void {
  this.service.getAdminbyId(this.loginId).subscribe((data)=>{
    this.result=data;
  console.log(data)
  //localStorage.setItem('id')
})


  }

}
