import { Component } from '@angular/core';

import { Evento } from 'src/app/Evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  constructor(
    private eventoService: EventosService,
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

  async excluirEvento(_id: string) {
    await this.eventoService.deleteEvento(_id).subscribe();

    window.location.reload();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.eventosFiltrados = this.todosOsEventos.filter((evento) =>
    evento.nome.toLowerCase().includes(value));
  }
}
