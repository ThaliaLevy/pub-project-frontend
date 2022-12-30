import { Component } from '@angular/core';

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
  ) { }

  todosOsFuncionarios: Funcionario[] = [];
  funcionariosFiltrados: Funcionario[] = [];
  value = '';

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe((funcionariosDB) => {
      this.funcionariosFiltrados = funcionariosDB;
      this.todosOsFuncionarios = funcionariosDB;
    })
  }

  async excluirFuncionario(_id: string) {
    await this.funcionarioService.deleteFuncionario(_id).subscribe();

    window.location.reload();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.funcionariosFiltrados = this.todosOsFuncionarios.filter((funcionario) =>
      funcionario.nome.toLowerCase().includes(value));
  }
}
