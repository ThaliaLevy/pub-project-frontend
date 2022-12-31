import { Component } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'DesafioAngular';
  rota: string = '';

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.rota = this.router.url;

        let home = document.querySelector('#home');
        let agendamentos = document.querySelector('#agendamentos');
        let comidas = document.querySelector('#comidas');
        let bebidas = document.querySelector('#bebidas');
        let eventos = document.querySelector('#eventos');
        let funcionarios = document.querySelector('#funcionarios');
        let fornecedores = document.querySelector('#fornecedores');

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
          }
            break;
          case '/funcionarios': {
            home!.classList.remove('active');
            funcionarios!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.className = 'active';
            fornecedores!.classList.remove('active');
          }
            break;
          case '/fornecedores': {
            home!.classList.remove('active');
            funcionarios!.classList.remove('active');
            agendamentos!.classList.remove('active');
            comidas!.classList.remove('active');
            bebidas!.classList.remove('active');
            eventos!.classList.remove('active');
            funcionarios!.classList.remove('active');
            fornecedores!.className = 'active';
          }
            break;
        }
      }
    });
  }
}
