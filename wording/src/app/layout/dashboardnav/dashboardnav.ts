import { Component, signal } from '@angular/core';
import { Layout } from '../../services/layout';

@Component({
  selector: 'app-dashboardnav',
  standalone: true,
  imports: [],
  templateUrl: './dashboardnav.html',
  styleUrl: './dashboardnav.css',
})
export class Dashboardnav {

  constructor(public layout: Layout) {}
  

    protected readonly Logo = signal('wording'); 

    protected readonly isMenuOpen = signal(false);

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
