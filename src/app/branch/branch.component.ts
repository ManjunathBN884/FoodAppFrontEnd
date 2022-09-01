import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
result:any
  constructor(private branch:AdminService) { }
loginId=localStorage.getItem('id')
  ngOnInit(): void {
    this.branch.getData().subscribe((data)=>{
      this.result=data;
    })
  }

}
