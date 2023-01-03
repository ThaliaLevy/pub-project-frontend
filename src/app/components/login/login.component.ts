import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  fecharModal(): void {
    this.dialogRef.close();
  }
}
