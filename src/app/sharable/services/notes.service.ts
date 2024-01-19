import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginFormComponent } from 'src/app/login/components/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url = 'http://localhost:3000/notes';
  constructor( private http: HttpClient) { }

  setNote(noteData: any): Observable<any>{
    return this.http.post<any>(this.url, noteData);
  }

  getNotes(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getSingleNote(id: string): Observable<any>{
    return this.http.get<any>(this.url+'/'+id)
  }

  deleteNote(id: string): Observable<any>{
    return this.http.delete(this.url+'/'+id)
  }

  updateNote(id: string, data: any): Observable<any> {
    let url = this.url+'/'+id;
    return this.http.put<any>(url, data);
  }
}
