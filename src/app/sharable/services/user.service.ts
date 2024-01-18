import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'http://localhost:3000/user';
constructor(private http: HttpClient){}

setUserData(userData: any): Observable<any> {
  return this.http.post<any>(this.url, userData);
}

getUserList(): Observable<any[]> {
  return this.http.get<any[]>(this.url);
}

}
