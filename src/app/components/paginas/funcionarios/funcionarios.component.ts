import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Funcionario } from 'src/app/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  constructor(
    private funcionarioService: FuncionariosService,
    private router: Router
    ) { }

  todosOsFuncionarios: Funcionario[] = [];

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe((funcionariosDB) => {
      this.todosOsFuncionarios = funcionariosDB;
    })
  }

  async excluirFuncionario(_id: string) {
    await this.funcionarioService.deleteFuncionario(_id).subscribe();

    window.location.reload();
  }
}
