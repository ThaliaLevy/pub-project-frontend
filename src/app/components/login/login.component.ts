import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Login } from 'src/app/Login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() loginData: Login | null = null;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService
    ) { }

  loginForm!: FormGroup;

  fecharModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get senha() {
    return this.loginForm.get('senha')!;
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.createLogin(this.loginForm.value).subscribe();

    location.replace('/usuarios');
  }
}
