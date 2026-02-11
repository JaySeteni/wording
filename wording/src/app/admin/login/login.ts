import { Component, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    constructor(private router: Router) {}

    // Signals
    email = signal('');
    password = signal('');

      // Validation
    emailValid = computed(() =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())
    );

    passwordValid = computed(() =>
      this.password().length >= 6
    );

    formValid = computed(() =>
      this.emailValid() && this.passwordValid()
    );
   
    onSubmit() {
    if (!this.formValid()) return;

    console.log({
      email: this.email(),
      password: this.password()
    });

    // Navigate to dashboard after login
    this.router.navigate(['dashboard']);
  }

}
