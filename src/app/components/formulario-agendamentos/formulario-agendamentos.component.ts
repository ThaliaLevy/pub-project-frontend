import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Agendamento } from 'src/app/Agendamento';
import { AgendamentosService } from 'src/app/services/agendamentos.service';

@Component({
  selector: 'app-formulario-agendamentos',
  templateUrl: './formulario-agendamentos.component.html',
  styleUrls: ['./formulario-agendamentos.component.css']
})
export class FormularioAgendamentosComponent {

  constructor(
    private agendamentosService: AgendamentosService,
    private route: ActivatedRoute,
  ) { }

  agendamentoForm!: FormGroup;
  _id = String(this.route.snapshot.paramMap.get('_id'));

  ngOnInit(): void {
    this.agendamentoForm = new FormGroup({
      _id: new FormControl(this._id),
      data: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required])
    });
  }

  get data() {
    return this.agendamentoForm.get('data')!;
  }

  get hora() {
    return this.agendamentoForm.get('hora')!;
  }

  converterDatas() {
    let data: Date = new Date(this.agendamentoForm.value.data);
    this.agendamentoForm.value.data = data.toLocaleDateString('pt-br');
  }

  submit() {
    if (this.agendamentoForm.invalid) {
      return;
    }

    this.converterDatas();

    this.agendamentosService.updateAgendamento(this._id!, this.agendamentoForm.value).subscribe();

    location.replace('/agendamentos/usuario');
  }
}
