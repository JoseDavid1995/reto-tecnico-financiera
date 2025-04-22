import { Component } from '@angular/core';
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
  workspaces = [
    { name: 'Gabriel Montoya', description: 'My workspace' },
    { name: 'Renato Montoya', description: 'Another workspace' },
  ];

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