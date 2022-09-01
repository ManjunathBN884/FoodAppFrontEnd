import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveFoodOrder } from '../save-food-order';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:AdminService,private root:Router) { }
  saveFoodOrder=new SaveFoodOrder()
result:any
  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    this.service.getOrder().subscribe((data)=>{
      this.result=data;
      console.log(data);
      for(let r of this.result.t){
        if(id==r.id){
          this.saveFoodOrder=r
          console.log(this.saveFoodOrder);
          
        }
      }
      
    })
  }
  onUpdate(form:NgForm){
    this.service.updateOrder(this.saveFoodOrder.id,this.saveFoodOrder).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully");
    this.root.navigate(['staff'])
    })
  }

}
