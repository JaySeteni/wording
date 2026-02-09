import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { Signup } from './admin/signup/signup';





export const routes: Routes = [

  { path: '', component: Login },      // default route
  { path: 'login', component: Login }, // /login
  { path: 'signup', component: Signup }, // /signup
  { path: '**', redirectTo: '' }                // wildcard
];;
