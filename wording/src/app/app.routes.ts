import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { Signup } from './admin/signup/signup';
import { Dashboard } from './admin/dashboard/dashboard';





export const routes: Routes = [

  { path: '', component: Signup },      // default route
  { path: 'login', component: Login }, // /login
  { path: 'signup', component: Signup }, // /signup
  { path: 'dashboad', component: Dashboard }, // /signup

  { path: '**', redirectTo: '' }                // wildcard
];;
