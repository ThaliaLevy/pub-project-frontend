import { Component } from '@angular/core';

import { Fornecedor } from 'src/app/Fornecedor';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent {
  constructor(
    private fornecedorService: FornecedoresService,
  ) { }

  todosOsFornecedores: Fornecedor[] = [];
  fornecedoresFiltrados: Fornecedor[] = [];
  value = '';

  ngOnInit(): void {
    this.fornecedorService.getFornecedores().subscribe((fornecedoresDB) => {
      this.fornecedoresFiltrados = fornecedoresDB;
      this.todosOsFornecedores = fornecedoresDB;
    })
  }

  recarregarTodosOsUsuarios() {
    this.fornecedorService.getFornecedores().subscribe((fornecedoresDB) => {
      this.fornecedoresFiltrados = fornecedoresDB;
      this.todosOsFornecedores = fornecedoresDB;
    })
  }

  async excluirFornecedor(_id: string) {
    await this.fornecedorService.deleteFornecedor(_id).subscribe();

    window.location.reload();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.fornecedoresFiltrados = this.todosOsFornecedores.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(value));
  }
}
