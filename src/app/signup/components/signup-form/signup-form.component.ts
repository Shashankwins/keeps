import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sharable/services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUp : FormGroup;
  users : any ;
  flag : boolean = false;
  constructor( private set: UserService, private routes: Router){
    this.signUp = new FormGroup({
      username : new FormControl('',[Validators.required]),
      uname : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
    this.set.getUserList().subscribe(list =>{
      this.users = list;
    })
  }

  save(){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username === this.signUp.value.username){
        this.flag = true;
      }
    }
    if(!this.flag){
      let  user = { username: this.signUp.value.username,
      uname: this.signUp.value.uname,
      password: this.signUp.value.password}
      if(!this.signUp.invalid){
      this.set.setUserData(user).subscribe(user =>{})
      this.routes.navigateByUrl('/login');
      }
    }
    else{
      alert("user already exist");
      this.signUp.reset();
    } 
  }; 
}
