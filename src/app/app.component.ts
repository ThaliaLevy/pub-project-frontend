import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router, NavigationEnd } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'DesafioAngular';
  rota: string = '';
  isAdmin!: boolean;
  idUsuario!: string;
  nomeUsuarioLogado!: string;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public loginService: LoginService,
    public usuariosService: UsuariosService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd && this.isAdmin == true) {
        this.rota = this.router.url;

        let home = document.querySelector('#home');
        let agendamentos = document.querySelector('#agendamentos');
        let comidas = document.querySelector('#comidas');
        let bebidas = document.querySelector('#bebidas');
        let eventos = document.querySelector('#eventos');
        let funcionarios = document.querySelector('#funcionarios');
        let fornecedores = document.querySelector('#fornecedores');
        let usuarios = document.querySelector('#usuarios');

        switch (this.rota) {
          case '/': {
            home!.className = 'active';
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.classList.remove('active');
          }
            break;
          case '/agendamentos': {
            home!.classList.remove('active');
            agendamentos!.className = 'active';
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.classList.remove('active');
            usuarios!.classList.remove('active');
          }
            break;
          case '/comidas': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.className = 'active';
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.classList.remove('active');
            usuarios!.classList.remove('active');
          }
            break;
          case '/bebidas': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.className = 'active';
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.classList.remove('active');
            usuarios!.classList.remove('active');
          }
            break;
          case '/eventos': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.className = 'active';
            funcionarios!.classList.remove('active');
            fornecedores!.classList.remove('active');
            usuarios!.classList.remove('active');
          }
            break;
          case '/funcionarios': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.className = 'active';
            fornecedores!.classList.remove('active');
            usuarios!.classList.remove('active');
          }
            break;
          case '/fornecedores': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.className = 'active';
            usuarios!.classList.remove('active');
          }
            break;
          case '/usuarios': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.classList.remove('active');
            usuarios!.className = 'active';
          }
            break;
        }
      } else {

        this.rota = this.router.url;

        let home = document.querySelector('#home');
        let agendamentos = document.querySelector('#agendamentos');
        let comidas = document.querySelector('#comidas');
        let bebidas = document.querySelector('#bebidas');
        let eventos = document.querySelector('#eventos');

        switch (this.rota) {
          case '/': {
            home!.className = 'active';
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
          }
            break;
          case '/agendamentos': {
            home!.classList.remove('active');
            agendamentos!.className = 'active';
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
          }
            break;
          case '/comidas': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.className = 'active';
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
          }
            break;
          case '/bebidas': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.className = 'active';
            eventos!.classList.remove('active');
          }
            break;
          case '/eventos': {
            home!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.className = 'active';
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.isAdmin = JSON.parse(localStorage.getItem("isAdmin")!);
    this.idUsuario = localStorage.getItem("idUsuario")!;

    this.usuariosService.getUsuario(this.idUsuario).subscribe((item) =>
      this.nomeUsuarioLogado = item.nome
    );
  }

  abrirModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '440px', width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  deslogar() {
    this.loginService.doLogout();
    window.location.reload();
  }
}
