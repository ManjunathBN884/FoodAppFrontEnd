import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodProduct } from '../food-product';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-save-food-product',
  templateUrl: './save-food-product.component.html',
  styleUrls: ['./save-food-product.component.css']
})
export class SaveFoodProductComponent implements OnInit {
foodProduct=new FoodProduct()
  constructor(private addProduct:AdminService,private root:Router) { }

  ngOnInit(): void {
    
  }
  submit(form:NgForm){
    console.log(form.value);  
    this.addProduct.addProduct(this.foodProduct).subscribe((res)=>{
      console.log(res);
      window.alert("Food Product Added Successfully");
      this.root.navigate(['products'])

    })
  }

}
