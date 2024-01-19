import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PreventGuard implements CanActivate {
  constructor(private _routes: Router){}
  canActivate() : boolean {
    if(sessionStorage.getItem('currentUser')){
      this._routes.navigateByUrl('/home');
      return false;
    }
    else{
      return true;
    }
  }
}
