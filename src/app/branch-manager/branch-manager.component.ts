import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.css']
})
export class BranchManagerComponent implements OnInit {
result:any;
  constructor(private menu:AdminService) { }
loginId=localStorage.getItem('id');
  ngOnInit(): void {
this.menu.getMenu().subscribe((data)=>{
this.result=data;
console.log(data);

})
  }
  // deleteMenu(id:any){
  //   this.menu.deleteMenu(id).subscribe((res)=>{
  //     console.log(res);
      
  //   })
  // }
}
