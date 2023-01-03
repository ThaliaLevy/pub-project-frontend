import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Evento } from 'src/app/Evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-cadastrar-eventos',
  templateUrl: './cadastrar-eventos.component.html',
  styleUrls: ['./cadastrar-eventos.component.css']
})
export class CadastrarEventosComponent {
  @Input() eventoData: Evento | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private eventosService: EventosService,
  ) { }

  eventoForm!: FormGroup;

  ngOnInit(): void {
    this.eventoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      dataInicio: new FormControl('', [Validators.required]),
      dataFim: new FormControl('', [Validators.required]),
      horaInicio: new FormControl('', [Validators.required]),
      horaFim: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required])
    });
  }

  imageShow: any = '';
  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      if (foto.size > 100000) {
        this.tamanhoExcedido = 'Tamanho de imagem excedido (Máximo: 100kB).';
        console.log(foto.size)
      } else {
        this.tamanhoExcedido = '';

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
          this.imageShow = (<FileReader>event.target).result;
          this.eventoForm.patchValue({ foto: this.imageShow });
        }
      }
    }
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
    if (this.eventoForm.invalid || this.tamanhoExcedido.length > 0) {
      return;
    }

    this.converterDatas();

    this.eventosService.createEvento(this.eventoForm.value).subscribe();

    location.replace('/eventos');
  }
}
