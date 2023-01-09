import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Login } from 'src/app/Login';
import { LoginService } from 'src/app/services/login.service';

import { Response } from 'src/app/Response';
import { JwtHelperService } from '@auth0/angular-jwt';

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
  response!: Response;
  loginFalhou: boolean = false;

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

    this.loginService.doLogin(this.loginForm.value).subscribe(
      item => {
        this.fecharModal();
        this.response = item;

        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.response.result.token);

        localStorage.setItem("Token", this.response.result.token);
        localStorage.setItem("isAdmin", decodedToken.claim);
        localStorage.setItem("idUsuario", decodedToken.sub)
      },
      (err: any) => {
        this.loginFalhou = true;
      }
    )
  }
}
