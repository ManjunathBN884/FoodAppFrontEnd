import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  constructor(private service:AdminService,private route:ActivatedRoute,private root:Router) { }
result:any
selectedAdmin:any
loginId=localStorage.getItem('id')
  ngOnInit(): void {
  }
submit(form:NgForm){
 
  let id=this.route.snapshot.params['id']
    this.service.getAdminbyId(this.loginId).subscribe((data)=>{
      this.result=data;
      console.log(data);
      // for(let r of this.result.t){
        if(id==this.result.t.id){
          this.selectedAdmin=this.result
          console.log(this.selectedAdmin);
          
        }
      // }
      
    })
}
onUpdate(form:NgForm){
  this.service.updateBranch(this.selectedAdmin.id,form.value).subscribe((res)=>{
    console.log(res);
    window.alert("Updated Successfully");
    this.root.navigate(['account'])
    
  })
}
}
