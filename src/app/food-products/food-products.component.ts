import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-food-products',
  templateUrl: './food-products.component.html',
  styleUrls: ['./food-products.component.css']
})
export class FoodProductsComponent implements OnInit {
result:any
  constructor(private product:AdminService,private root:Router) { }

  ngOnInit(): void {
this.product.getProduct().subscribe((data)=>{
  this.result=data
  console.log(data);
  
})
  }
  deleteProduct(id:any){
    this.product.deleteProduct(id).subscribe((res)=>{
      console.log(res);
      window.alert("Product Deleted Successfully")
      this.root.navigate(['products'])
      
    })
  }

}
