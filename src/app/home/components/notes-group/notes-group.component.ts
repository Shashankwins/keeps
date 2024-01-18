import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes-group',
  templateUrl: './notes-group.component.html',
  styleUrls: ['./notes-group.component.css']
})
export class NotesGroupComponent implements OnInit{

  @Input() label : string = '';
  @Input() type : string = '';
  @Input() control : string = '';
  @Input() group! : FormGroup;
 
  ngOnInit(): void {
    this.group.addControl(this.control, new FormControl('hello',Validators.required))
  }
}


