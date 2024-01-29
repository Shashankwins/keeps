import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkoolRegComponent } from './components/skool-reg/skool-reg.component';
import { MaterialModule } from '../sharable/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    SkoolRegComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SchoolModule { }
