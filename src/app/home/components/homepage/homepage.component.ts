  import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { NotesService } from 'src/app/sharable/services/notes.service';

  @Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })
  export class HomepageComponent implements OnInit{
  flag: boolean = false;
  flag2: boolean = false;
  noteIndex : number = 0;
  currentNote : any;
  notes : any[] = [];
  noteForm : FormGroup;
  changeFlag(){
    this.flag = true;
  }
  constructor( private save: NotesService, private routes: Router){
    this.noteForm = new FormGroup({
      title : new FormControl('',Validators.required),
      desc : new FormControl('', Validators.required)
    })

    this.save.getNotes().subscribe(list=>{
      list.filter((note)=>{
        if(note.userId === sessionStorage.getItem('userId')){
          this.notes.push(note);
        }
      }) 
    })
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('currentUser')){
      alert('No user login');
      this.routes.navigateByUrl('/login');
    } 
  }
  
  clear(){
    this.noteForm.reset();
  }

  saveNote(){
    this.notes
    if(!this.noteForm.invalid){
      let note = { title: this.noteForm.value.title,
      desc: this.noteForm.value.desc,
      userId: sessionStorage.getItem('userId')}
      this.save.setNote(note).subscribe((note) => {
       this.notes.push(note);
      });
      this.flag = false;
      this.noteForm.reset();
    } 
  }

  edit(index:number){
    this.flag = true;
    this.flag2 = true;
    this.noteIndex= index;
    this.save.getSingleNote(this.notes[index].id).subscribe(note =>{
      this.currentNote = note;
      this.noteForm.controls['title'].setValue(this.currentNote.title);
      this.noteForm.controls['desc'].setValue(this.currentNote.desc);
    })
  }

  remove(){
    this.save.deleteNote(this.notes[this.noteIndex].id).subscribe()
    this.notes.splice(this.noteIndex,1)
    this.noteForm.reset();
    this.flag = false;
    this.flag2 = false;
  }

  update(){
    if(this.noteForm.invalid){
      return;
    }
    let note = {title : this.noteForm.value.title, 
      desc : this.noteForm.value.desc, 
      userId : sessionStorage.getItem('userId')};
    this.save.updateNote(this.notes[this.noteIndex].id, note).subscribe(note=>{
      this.notes.splice(this.noteIndex, 1, note)
    })
    this.noteForm.reset();
    this.flag = false;
    this.flag2 = false;
  }
}
