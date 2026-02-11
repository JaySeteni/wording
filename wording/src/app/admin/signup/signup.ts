import { Component, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

constructor(private router: Router) {}

  // Signals
  name = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');


  // validators
 
  nameValid = computed(() => this.name().length >= 3);

  emailValid = computed(() =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())
  );

  passwordValid = computed(() => this.password().length >= 6);

  passwordsMatch = computed(() =>
    this.password() === this.confirmPassword()
  );

  // form validators

  formValid = computed(() =>
    this.nameValid() &&
    this.emailValid() &&
    this.passwordValid() &&
    this.passwordsMatch()
  );

  // submit Function

    onSubmit() {
    if (!this.formValid()) return;

    const formData = {
      name: this.name(),
      email: this.email(),
      password: this.password()
    };

    console.log('Signup Data:', formData);

    this.router.navigate(['/login']);
  }

}
