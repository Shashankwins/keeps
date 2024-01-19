import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _routes: Router){}
  canActivate() : boolean {
    if(sessionStorage.getItem('currentUser')){
      return true;
    }
    else{
      alert('No user logon')
      this._routes.navigateByUrl('/login');
      return false;
    }
  }
}
