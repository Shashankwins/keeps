import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../sharable/material/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { NoteComponent } from './components/note/note.component';
import { NotesService } from '../sharable/services/notes.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[NotesService]
})
export class HomeModule { }
