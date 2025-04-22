import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onCheckEmail() {
    debugger;
    const email = this.registerForm.value.email;

    // Obtener todos los usuarios almacenados en localStorage
    const storedUsers = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verificar si el email ya existe en el almacenamiento local
    const emailExists = storedUsers.some((user: { email: string }) => user.email === email);

    if (emailExists) {
      this.router.navigate(['/']); // Redirigir al formulario de login
      alert('Este correo ya está en uso. Por favor, inicia sesión.');
    } else {
      // Continuar con el flujo de creación de cuenta
      this.router.navigate(['/continue-register']);
      alert('Continuar con la creación de la cuenta.');
    }
  }
}
