import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  standalone: true,
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class WorkspaceComponent {
  showWorkspaces = false;
  showRecent = false;

  toggleWorkspaces() {
    this.showWorkspaces = !this.showWorkspaces;
    // Si se abre el dropdown de Workspaces, cierra el de Recent
    if (this.showWorkspaces) {
      this.showRecent = false;
    }
  }

  toggleRecent() {
    this.showRecent = !this.showRecent;
    // Si se abre el dropdown de Recent, cierra el de Workspaces
    if (this.showRecent) {
      this.showWorkspaces = false;
    }
  }
}
