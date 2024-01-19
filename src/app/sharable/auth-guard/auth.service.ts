import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  
  userList : any[] = [];
  constructor(private _userService: UserService, private _routes: Router){
    this._userService.getUserList().subscribe(list => {
    this.userList = list;
    })
  }
  
  login(user:{username: string, password: string}){
     for(let i=0;i<this.userList.length;i++){
      if(this.userList[i].username === user.username && this.userList[i].password === user.password){
        sessionStorage.setItem('currentUser', this.userList[i].uname);
        sessionStorage.setItem('userId', this.userList[i].id);
        this._routes.navigateByUrl('/home');
        return true;
      }
      else if(i == this.userList.length-1){
        return false;
      }
    }
    return false;
  }
}
