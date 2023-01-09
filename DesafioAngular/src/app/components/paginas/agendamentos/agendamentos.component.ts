import { Component } from '@angular/core';

import { Evento } from 'src/app/Evento';
import { EventosService } from 'src/app/services/eventos.service';
import { AgendamentosService } from 'src/app/services/agendamentos.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent {

  constructor(
    private eventoService: EventosService,
    private agendamentosService: AgendamentosService
  ) { }

  todosOsEventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];
  value = '';

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((eventosDB) => {
      this.eventosFiltrados = eventosDB;
      this.todosOsEventos = eventosDB;
    })
  }

  recarregarTodosOsEventos() {
    this.eventoService.getEventos().subscribe((eventosDB) => {
      this.eventosFiltrados = eventosDB;
      this.todosOsEventos = eventosDB;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.eventosFiltrados = this.todosOsEventos.filter((evento) =>
    evento.nome.toLowerCase().includes(value));
  }
}
