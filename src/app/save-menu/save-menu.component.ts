import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-save-menu',
  templateUrl: './save-menu.component.html',
  styleUrls: ['./save-menu.component.css']
})
export class SaveMenuComponent implements OnInit {
menu =new Menu()
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value);  
    this.service.addMenu(this.menu).subscribe((res)=>{
      console.log(res);
      window.alert("Menu Added Succeessfully")
      this.router.navigate(['menu'])
    })
  }
}
