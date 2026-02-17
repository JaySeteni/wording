import { Component, signal } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Dashboardnav } from '../../layout/dashboardnav/dashboardnav';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navbar, Dashboardnav],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {



}

