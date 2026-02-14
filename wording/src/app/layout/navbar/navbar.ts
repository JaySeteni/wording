import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {

  // logo: string = 'assets/Logo.png';

    protected readonly Logo = signal('wording'); 

     // 🔥 Menu state signal
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
