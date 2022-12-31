import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Comida } from 'src/app/Comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-formulario-comida',
  templateUrl: './formulario-comida.component.html',
  styleUrls: ['./formulario-comida.component.css']
})
export class FormularioComidaComponent {
  @Input() btnText!: string;
  @Input() comidaData: Comida | null = null;

  constructor(
    private comidasService: ComidasService,
    private router: Router
  ) { }

  comidaForm!: FormGroup;

  ngOnInit(): void {
    this.comidaForm = new FormGroup({
      _id: new FormControl(this.comidaData ? this.comidaData._id : ''),
      nome: new FormControl(this.comidaData ? this.comidaData.nome : '', [Validators.required]),
      descricao: new FormControl(this.comidaData ? this.comidaData.descricao : '', [Validators.required]),
      preco: new FormControl(this.comidaData ? this.comidaData.preco : '', [Validators.required])
    });
  }

  get nome() {
    return this.comidaForm.get('nome')!;
  }

  get preco() {
    return this.comidaForm.get('preco')!;
  }

  get descricao() {
    return this.comidaForm.get('descricao')!;
  }

  submit() {
    if (this.comidaForm.invalid) {
      return;
    }

    this.comidasService.updateComida(this.comidaData!._id!, this.comidaForm.value).subscribe();

    this.router.navigate(['/comidas']);
  }
}
