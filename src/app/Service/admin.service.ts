import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

role:any;
  constructor(private http:HttpClient) { }
  addAdmin(admin:any){
    return this.http.post("http://localhost:8080/save",admin);
  }

 login(user:any){
  return this.http.post("http://localhost:8080/login",user);
 }
 getrole(){

  return localStorage.getItem('role')

}

log(){

  this.role=this.getrole()
  if(this.role==undefined){
    window.alert("please login first")
    return false;
  }
  else{
    return true;
  }
}
getData(){

  return this.http.get("http://localhost:8080/getAllBranch");

}
getMenu(){
  return this.http.get("http://localhost:8080/getAllMenu")
}

getOrder(){
return this.http.get("http://localhost:8080/getAllFoodOrder")   
}
saveFood(order:any){
  return this.http.post("http://localhost:8080/saveFoodOrder",order);
}
deleteMenu(id:any){
  return this.http.delete(`http://localhost:8080/deleteMenu/${id}`)
}
saveStaff(user:any){
  return this.http.post("http://localhost:8080/saveStaff",user)
}

updateMenu(id:any,menu:any){
  return this.http.put(`http://localhost:8080/updateMenu/${id}`,menu)
}

addProduct(product:any){
  return this.http.post("http://localhost:8080/saveFoodProduct",product)
}
getProduct(){
  return this.http.get("http://localhost:8080/getAllFoodProduct");
}
deleteProduct(id:any){
  return this.http.delete(`http://localhost:8080/deleteFoodProduct/${id}`)
}
updateProduct(id:any,product:any){
  return this.http.put(`http://localhost:8080/updateFoodProduct/${id}`,product)
}
loginStaff(staff:any){
  return this.http.post("http://localhost:8080/loginStaff",staff);

}
getrole2(){

  return localStorage.getItem('role')

}
log2(){
  this.role=this.getrole2()
  if(this.role==undefined || this.role=='admin'|| this.role=='Branch Manager'){
    window.alert("please login first")
    return false;
}
  else{
 return true;
}
}
loginManager(manager:any){
return this.http.post("http://localhost:8080/loginManager",manager)
}
getrole3(){

  return localStorage.getItem('role')

}
log3(){
  this.role=this.getrole3()
  if(this.role==undefined || this.role=='staff'){
    window.alert("please login first")
    return false;
}
  else{
 return true;
}
}
addManager(manager:any){
  return this.http.post("http://localhost:8080/saveBranchManager",manager)
}
addBranch(branch:any){
  return this.http.post("http://localhost:8080/saveBranch",branch)
}
updateBranch(id:any,branch:any){
  return this.http.put(`http://localhost:8080/updateBranch/${id}`,branch)
}
log4(){
  this.role=this.getrole3()
  if(this.role==undefined || this.role=='staff'|| this.role=='admin'){
    window.alert("please login as Manager first")
    return false;
}
  else{
 return true;
}
}
updateOrder(id:any,order:any){
  return this.http.put(`http://localhost:8080/updateFoodOrder/${id}`,order)
}
deleteOrder(id:any){
  return this.http.delete(`http://localhost:8080/deleteFoodOrder/${id}`)
}
log5(){
  this.role=this.getrole3()
  if(this.role==undefined ||this.role=='staff'|| this.role=='Branch Manager'){
    window.alert("please login as Admin")
    return false;
}
  else{
 return true;
}
}
addMenu(menu:any){
  return this.http.post("http://localhost:8080/savemenu",menu)
}
getAdminbyId(id:any){
  return this.http.get(`http://localhost:8080/getbyid/${id}`)
}
updateAdmin(id:any,admin:any){
  return this.http.put(`http://localhost:8080/updateAdmin/${id}`,admin)
}
}
