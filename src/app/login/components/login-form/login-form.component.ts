import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/sharable/auth-guard/auth.service';
import { UserService } from 'src/app/sharable/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm : FormGroup;
  users : any ;
  constructor( private get: UserService, private routes: Router, private authService : AuthService){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
    this.get.getUserList().subscribe(list =>{
      this.users = list;  
  })
  }

  auth(){
    if(this.authService.login(this.loginForm.value)){
      let username = sessionStorage.getItem('currentUser');
      alert('Welcome '+ username)
    }
    else{
      this.loginForm.reset();
      alert('Invalid username or password');
    }
  };
}
