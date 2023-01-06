import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Agendamento } from 'src/app/Agendamento';
import { AgendamentosService } from 'src/app/services/agendamentos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastrar-agendamento',
  templateUrl: './cadastrar-agendamento.component.html',
  styleUrls: ['./cadastrar-agendamento.component.css']
})
export class CadastrarAgendamentoComponent {
  constructor(
    private agendamentosService: AgendamentosService,
    private route: ActivatedRoute,
  ) { }

  agendamentoForm!: FormGroup;
  usuarioId!: string;
  eventoId!: string;

  ngOnInit(): void {

    this.usuarioId = localStorage.getItem('idUsuario')!;
    this.eventoId = String(this.route.snapshot.paramMap.get('_id'));

    this.agendamentoForm = new FormGroup({
      idUsuario: new FormControl(this.usuarioId),
      idEvento: new FormControl(this.eventoId),
      data: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required])
    });
  }

  get idUsuario() {
    return this.agendamentoForm.get('idUsuario')!;
  }

  get idEvento() {
    return this.agendamentoForm.get('idEvento')!;
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

    this.agendamentosService.createAgendamento(this.agendamentoForm.value).subscribe();

    location.replace('/agendamentos');
  }
}
