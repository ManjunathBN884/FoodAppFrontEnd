import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FoodProduct } from '../food-product';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private products:AdminService,private root:Router) { }
result:any;
foodProduct=new FoodProduct()
  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    this.products.getProduct().subscribe((data)=>{
      this.result=data;
      console.log(data);
      for(let r of this.result.t){
        if(id==r.id){
          this.foodProduct=r
          console.log(this.foodProduct);
          
        }
      }
      
    })
  }
  onUpdate(form:NgForm){
    this.products.updateProduct(this.foodProduct.id,this.foodProduct).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully");
      this.root.navigate(['products'])
      
    })
  }
}

