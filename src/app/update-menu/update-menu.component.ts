import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
menu=new Menu()
result:any
  constructor(private route:ActivatedRoute,private updateMenu:AdminService,private root:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    this.updateMenu.getMenu().subscribe((data)=>{
      this.result=data;
      console.log(data);
      for(let r of this.result.t){
        if(id==r.id){
          this.menu=r
          console.log(this.menu);
          
        }
      }
      
    })
  }
  onUpdate(form:NgForm){
    this.updateMenu.updateMenu(this.menu.id,this.menu).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully");
      this.root.navigate(['menu'])
      
    })
  }

}
