import { Component,  signal } from '@angular/core';
import { Dashboardnav } from '../dashboardnav/dashboardnav';
import { Layout } from '../../services/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {

    constructor(public layout: Layout) {}

  // logo: string = 'assets/Logo.png';

    protected readonly Logo = signal('wording'); 

     // 🔥 Menu state signal
  protected readonly isMenuOpen = signal(false);

  dashboardnav = Dashboardnav;

  // Toggle menu

    search() {
    this.isMenuOpen.update(value => !value);
    console.log('Menu open:', this.isMenuOpen());
  }


  openMenu() {
    this.isMenuOpen.update(value => !value);

    
    console.log('Menu open:', this.isMenuOpen());
    
  }

  // Close menu
  closeMenu() {
    this.isMenuOpen.set(false);
    console.log('Menu open:', this.isMenuOpen());

  }



}
