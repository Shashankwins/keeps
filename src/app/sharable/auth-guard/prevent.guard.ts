import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventGuard implements CanActivate {
  constructor(private routes: Router){}
  canActivate() : boolean {
    if(sessionStorage.getItem('currentUser')){
      this.routes.navigateByUrl('/home');
      return false;
    }
    else{
      return true;
    }
  }
}
