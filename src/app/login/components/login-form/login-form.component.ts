import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
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
  constructor( private _userService: UserService,  private _authService : AuthService){
    this.loginForm = new FormGroup({})
    this._userService.getUserList().subscribe(list =>{
      this.users = list;  
  })
  }

  auth(){
    if(this._authService.login(this.loginForm.value)){
      let username = sessionStorage.getItem('currentUser');
      alert('Welcome '+ username)
    }
    else{
      this.loginForm.reset();
      this.loginForm.markAsUntouched();
      alert('Invalid username or password');
    }
  };
}
