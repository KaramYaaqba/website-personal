import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-detail-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './project-detail-dialog.component.html',
  styleUrl: './project-detail-dialog.component.scss'
})
export class ProjectDetailDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<ProjectDetailDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    closeDialog() {
      this.dialogRef.close();
    }
  }