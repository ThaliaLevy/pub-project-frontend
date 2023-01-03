import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Evento } from 'src/app/Evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-editar-eventos',
  templateUrl: './editar-eventos.component.html',
  styleUrls: ['./editar-eventos.component.css']
})
export class EditarEventosComponent {
  evento!: Evento;
  btnText: string = 'Salvar edição';

  constructor(
    private eventosService: EventosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.eventosService.getEvento(_id).subscribe((item) => {
      this.evento = item;
    })
  }
}
