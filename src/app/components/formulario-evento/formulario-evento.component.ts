import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Evento } from 'src/app/Evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent {
  @Input() btnText!: string;
  @Input() eventoData!: Evento;

  eventoForm!: FormGroup;

  constructor(
    private eventosService: EventosService,
  ) { }

  ngOnInit(): void {
    this.eventoForm = new FormGroup({
      _id: new FormControl(this.eventoData ? this.eventoData._id : ''),
      nome: new FormControl(this.eventoData ? this.eventoData.nome : '', [Validators.required]),
      descricao: new FormControl(this.eventoData ? this.eventoData.descricao : '', [Validators.required]),
      dataInicio: new FormControl(this.eventoData ? this.eventoData.dataInicio : '', [Validators.required]),
      dataFim: new FormControl(this.eventoData ? this.eventoData.dataFim : '', [Validators.required]),
      horaInicio: new FormControl(this.eventoData ? this.eventoData.horaInicio : '', [Validators.required]),
      horaFim: new FormControl(this.eventoData ? this.eventoData.horaFim : '', [Validators.required]),
    });
  }

  get nome() {
    return this.eventoForm.get('nome')!;
  }

  get descricao() {
    return this.eventoForm.get('descricao')!;
  }

  get dataInicio() {
    return this.eventoForm.get('dataInicio')!;
  }

  get dataFim() {
    return this.eventoForm.get('dataFim')!;
  }

  get horaInicio() {
    return this.eventoForm.get('horaInicio')!;
  }

  get horaFim() {
    return this.eventoForm.get('horaFim')!;
  }

  converterDatas() {
    let dataInicio: Date = new Date(this.eventoForm.value.dataInicio);
    this.eventoForm.value.dataInicio = dataInicio.toLocaleDateString('pt-br');

    let dataFim: Date = new Date(this.eventoForm.value.dataFim);
    this.eventoForm.value.dataFim = dataFim.toLocaleDateString('pt-br');
  }

  submit() {
    if (this.eventoForm.invalid) {
      return;
    }

    this.converterDatas();

    this.eventosService.updateEvento(this.eventoData!._id!, this.eventoForm.value).subscribe();

    location.replace('/eventos');
  }
}
