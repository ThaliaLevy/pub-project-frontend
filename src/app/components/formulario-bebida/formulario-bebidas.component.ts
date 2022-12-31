import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Bebida } from 'src/app/Bebida';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-formulario-bebidas',
  templateUrl: './formulario-bebidas.component.html',
  styleUrls: ['./formulario-bebidas.component.css']
})
export class FormularioBebidasComponent {
  @Input() btnText!: string;
  @Input() bebidaData: Bebida | null = null;

  constructor(
    private bebidasService: BebidasService,
    private router: Router
  ) { }

  bebidaForm!: FormGroup;

  ngOnInit(): void {
    this.bebidaForm = new FormGroup({
      _id: new FormControl(this.bebidaData ? this.bebidaData._id : ''),
      nome: new FormControl(this.bebidaData ? this.bebidaData.nome : '', [Validators.required]),
      descricao: new FormControl(this.bebidaData ? this.bebidaData.descricao : '', [Validators.required]),
      preco: new FormControl(this.bebidaData ? this.bebidaData.preco : '', [Validators.required])
    });
  }

  get nome() {
    return this.bebidaForm.get('nome')!;
  }

  get preco() {
    return this.bebidaForm.get('preco')!;
  }

  get descricao() {
    return this.bebidaForm.get('descricao')!;
  }

  submit() {
    if (this.bebidaForm.invalid) {
      return;
    }

    this.bebidasService.updateBebida(this.bebidaData!._id!, this.bebidaForm.value).subscribe();

    this.router.navigate(['/bebidas']);
  }
}
