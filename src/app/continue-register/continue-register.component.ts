import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continue-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './continue-register.component.html',
  styleUrl: './continue-register.component.css'
})
export class ContinueRegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private storageService: StorageService, private router: Router) {}

  onSubmit(): void {
    debugger;
    if (this.email && this.password) {
      this.storageService.saveUser(this.email, this.password);
      this.router.navigate(['/']);
      alert('Correo guardado: ' + this.email);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
