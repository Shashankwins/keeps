import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skool-reg',
  templateUrl: './skool-reg.component.html',
  styleUrls: ['./skool-reg.component.css']
})
export class SkoolRegComponent {
  skoolReg : FormGroup;
 fields = [{type:'text', control: 'schoolName', label: 'School Name'},
 {type:'text', control: 'schoolAddress', label: 'Address'},
 {type:'tel', control: 'contactNumber', label: 'School Phone No.'},
 {type:'mail', control: 'email', label: 'School Official Mail'},
 {type:'password', control: 'password', label: 'Password'},
 {type:'text', control: 'gradeLevel', label: 'Grade Level'},
 {type:'text', control: 'principalName', label: 'Principal\'s Name'},
 {type:'text', control: 'establishmentYear', label: 'Establishment Year'}
]
constructor(){
  this.skoolReg = new FormGroup({}); 
}

saveSkool(){
  
}
}
