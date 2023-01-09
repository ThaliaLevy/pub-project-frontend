import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Evento } from 'src/app/Evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-foto-eventos',
  templateUrl: './foto-eventos.component.html',
  styleUrls: ['./foto-eventos.component.css']
})
export class FotoEventosComponent {
  @Input() btnText!: string;
  @Input() eventoData: Evento | null = null;
  
  tamanhoExcedido: string = '';

  constructor(
    private eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  eventoForm!: FormGroup;

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.eventoForm = new FormGroup({
      _id: new FormControl(this.eventoData ? this.eventoData._id : ''),
      foto: new FormControl('')
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

  submit() {
    if (this.eventoForm.invalid) {
      return;
    }

    const _id = String(this.route.snapshot.paramMap.get('_id'));
    this.eventosService.updateEvento(_id, this.eventoForm.value).subscribe();

    location.replace('/eventos');
  }
}
