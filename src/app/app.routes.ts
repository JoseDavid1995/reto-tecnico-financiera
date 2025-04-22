import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContinueRegisterComponent } from './continue-register/continue-register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta principal para el login
  { path: 'register', component: RegisterComponent }, // Ruta para crear una cuenta
  { path: 'continue-register', component: ContinueRegisterComponent }, // Ruta para crear una cuenta

];
