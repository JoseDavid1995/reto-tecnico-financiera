import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageKey = 'usuarios'; // Cambia la clave para reflejar que ahora guardamos usuarios

  constructor() { }

  // Guardar usuario (correo y contraseña)
  saveUser(email: string, password: string): void {
    const users = this.getUsers();
    users.push({ email, password }); // Almacena un objeto con email y password
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // Obtener usuarios
  getUsers(): { email: string; password: string; }[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }
}
