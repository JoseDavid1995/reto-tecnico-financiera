import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-continue-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './continue-register.component.html',
  styleUrl: './continue-register.component.css'
})
export class ContinueRegisterComponent {
  registroForm: FormGroup;


  constructor(private storageService: StorageService, private router: Router, private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit(): void {

    if (this.registroForm.valid) {
      console.log('Formulario válido', this.registroForm.value);
    } else {
      console.log('Formulario inválido');
    }

    if (this.registroForm.controls['email'].value && this.registroForm.controls['password'].value) {
      this.storageService.saveUser(this.registroForm.controls['email'].value, this.registroForm.controls['password'].value);
      this.router.navigate(['/']);
      alert('Correo guardado: ' + this.registroForm.controls['email'].value);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
