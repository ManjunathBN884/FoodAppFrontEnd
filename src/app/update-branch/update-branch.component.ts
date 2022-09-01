import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../branch';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {
branch=new Branch()
result:any
  constructor(private service:AdminService,private route:ActivatedRoute,private root:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    this.service.getData().subscribe((data)=>{
      this.result=data;
      console.log(data);
      for(let r of this.result.t){
        if(id==r.id){
          this.branch=r
          console.log(this.branch);
          
        }
      }
      
    })
  }
  
  onUpdate(form:NgForm){
    this.service.updateBranch(this.branch.id,this.branch).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully");
      this.root.navigate(['branch'])
      
    })
  }
}
