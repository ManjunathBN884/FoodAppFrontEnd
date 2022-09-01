import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveFoodOrder } from '../save-food-order';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-save-food-order',
  templateUrl: './save-food-order.component.html',
  styleUrls: ['./save-food-order.component.css']
})
export class SaveFoodOrderComponent implements OnInit {
  saveFoodOrder = new SaveFoodOrder()
  constructor(private order:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value);  
    this.order.saveFood(this.saveFoodOrder).subscribe((res)=>{
      console.log(res);
      window.alert("Order Taken Succeessfully")
      this.router.navigate(['staff'])
    })
  }

}
