import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor(private routes: Router){}
 currentUser = sessionStorage.getItem('currentUser');
 logout(){
  sessionStorage.clear();
  this.routes.navigateByUrl('/login');
 }
}
