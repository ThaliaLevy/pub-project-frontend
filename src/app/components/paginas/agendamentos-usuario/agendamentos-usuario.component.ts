import { Component } from '@angular/core';
import { Agendamento } from 'src/app/Agendamento';
import { AgendamentosService } from 'src/app/services/agendamentos.service';

@Component({
  selector: 'app-agendamentos-usuario',
  templateUrl: './agendamentos-usuario.component.html',
  styleUrls: ['./agendamentos-usuario.component.css']
})
export class AgendamentosUsuarioComponent {

  constructor(
    private agendamentosService: AgendamentosService,
  ) { }

  todosOsAgendamentos: Agendamento[] = [];
  agendamentosFiltrados: Agendamento[] = [];
  idUsuario!: string;
  value = '';

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('idUsuario')!;

    this.agendamentosService.getAgendamentosUsuario(this.idUsuario).subscribe((agendamentosDB) => {
      this.agendamentosFiltrados = agendamentosDB;
      this.todosOsAgendamentos = agendamentosDB;
    })
  }

  recarregarTodosOsAgendamentos() {
    this.agendamentosService.getAgendamentosUsuario(this.idUsuario).subscribe((agendamentosDB) => {
      this.agendamentosFiltrados = agendamentosDB;
      this.todosOsAgendamentos = agendamentosDB;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.agendamentosFiltrados = this.todosOsAgendamentos.filter((evento) =>
    evento.nomeEvento!.toLowerCase().includes(value));
  }
  
  async excluirAgendamento(_id: string) {
    await this.agendamentosService.deleteAgendamento(_id).subscribe();

    window.location.reload();
  }
}
