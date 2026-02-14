import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { Signup } from './admin/signup/signup';
import { Dashboard } from './admin/dashboard/dashboard';
import { Navbar } from './layout/navbar/navbar';





export const routes: Routes = [

  { path: '', component: Dashboard },  // default route
  { path: 'login', component: Login },  // login
  { path: 'signup', component: Signup },  // signup
  { path: 'dashboard', component: Dashboard },  // dashboard
  { path: 'navbar', component: Navbar },  // /signup

  { path: '**', redirectTo: '' }       // wildcard
];


