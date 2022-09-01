import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from '../branch';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
branch=new Branch()
  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value);  
    this.service.addBranch(this.branch).subscribe((res)=>{
      console.log(res);
    })
  }

}
