import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule],

})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    debugger;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const storedUsers = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Validar si el correo y la contraseña están almacenados
      const user = storedUsers.find((user: { email: string; password: string; }) =>
        user.email === email && user.password === password
      );

      if (user) {
        document.cookie = "access_token=my_token; max-age=300; path=/";
        alert('Inicio de sesión exitoso');
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
