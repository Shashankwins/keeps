import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signup/components/signup-form/signup-form.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { HomepageComponent } from './home/components/homepage/homepage.component';
import { AuthGuard } from './sharable/auth-guard/auth.guard';
import { PreventGuard } from './sharable/auth-guard/prevent.guard';

const routes: Routes = [{path:'', component: SignupFormComponent, canActivate: [PreventGuard]},
  {path:'login', component: LoginFormComponent, canActivate: [PreventGuard]},
  {path:'home', component:HomepageComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }