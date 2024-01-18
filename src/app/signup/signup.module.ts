import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MaterialModule } from '../sharable/material/material/material.module';
import { UserService } from '../sharable/services/user.service';



@NgModule({
  declarations: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers:[UserService]
})
export class SignupModule { }
