import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../sharable/material/material/material.module';
import { UserService } from '../sharable/services/user.service';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [UserService]
})
export class LoginModule { }
