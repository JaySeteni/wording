import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Layout {

  sidenavOpen = signal(true);

toggle() {
  this.sidenavOpen.update(value => !value);
  console.log('Sidenav open:', this.sidenavOpen());
}
  
}
