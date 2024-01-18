import { Component, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent{
  @Output() editNote:EventEmitter<any>= new EventEmitter();
  @Input() notesList : any[] = [];
  index : any;

 edit(id:number){ 
  this.editNote.emit(id);
 }
}
