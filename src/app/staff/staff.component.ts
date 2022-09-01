import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
result:any;
  constructor(private staff:AdminService,private router:Router) { }
  loginId=localStorage.getItem('id');
  ngOnInit(): void {
  this.staff.getOrder().subscribe((data)=>{
  this.result=data;
  console.log(data);
  
})
  }
  deleteOrder(id:any){
    this.staff.deleteOrder(id).subscribe((res)=>{
      console.log(res);
      window.alert("Order Deleted Successfully")
      this.router.navigate(['staff'])
      
    })
  }

}
