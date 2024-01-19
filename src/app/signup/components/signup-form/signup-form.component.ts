import { Component } from '@angular/core';
import { FormGroup,} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sharable/services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUpForm : FormGroup;
  users : any ;
  flag : boolean = false;
  constructor( private _userService: UserService, private _routes: Router){
    this.signUpForm = new FormGroup({})
    this._userService.getUserList().subscribe(list =>{
      this.users = list;
    })
  }

  save(){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username === this.signUpForm.value.username){
        this.flag = true;
        break;
      }
    }
    if(!this.flag){
      let  user = { username: this.signUpForm.value.username,
      uname: this.signUpForm.value.uname,
      password: this.signUpForm.value.password}
      if(!this.signUpForm.invalid){
      this._userService.setUserData(user).subscribe()
      this._routes.navigateByUrl('/login');
      }
    }
    else{
      alert("user already exist");
      this.signUpForm.reset();
      this.signUpForm.markAsUntouched();
    } 
  }; 
}