import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; 
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatAccordion, MatExpansionModule],
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  activeButton: string = '';
  comentario1: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
  readonly panelOpenState = signal(false);


  constructor(private router: Router) {
    this.checkToken();

    }

    checkToken() {
      const token = this.getTokenFromCookies();
      if (token) {
        this.router.navigate(['/workspace']);
      } else {
        this.router.navigate(['/']);
      }
    }

    getTokenFromCookies(): string | null {
      return document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1] || null;
    }
  setActive(button: string) {
    this.activeButton = button;
  }

  openWorkspaces() {
    this.setActive('workspaces');
    console.log('Opening Workspaces...');
  }

  openTemplates() {
    this.setActive('templates');
    console.log('Opening Templates...');
  }

  openHome() {
    this.setActive('home');
    console.log('Opening Home...');
  }

  createBoard() {
    console.log('Creating a new board...');
  }

  goToDashboard() {
    console.log('Navigating to Dashboard');
  }

  openSettings() {
    console.log('Opening Settings');
  }

  viewEarnings() {
    console.log('Viewing Earnings');
  }

  signOut() {
    this.router.navigate(['/']);

  }
}