import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  image:String="https://th.bing.com/th/id/OIP.Sx2nWXlHxa9ayFE_-F4CYQHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  logout(){

    localStorage.removeItem('role');
  
    window.alert("user has logged out");
  
    }
   
}
