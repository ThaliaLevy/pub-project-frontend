import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Bebida } from 'src/app/Bebida';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-cadastrar-bebidas',
  templateUrl: './cadastrar-bebidas.component.html',
  styleUrls: ['./cadastrar-bebidas.component.css']
})
export class CadastrarBebidasComponent {
  @Input() bebidaData: Bebida | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private bebidasService: BebidasService,
    private router: Router
  ) { }

  bebidaForm!: FormGroup;

  ngOnInit(): void {
    this.bebidaForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
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
          this.bebidaForm.patchValue({ foto: this.imageShow });
        }
      }
    }
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

    this.bebidasService.createBebida(this.bebidaForm.value).subscribe();

    location.replace('/bebidas');
  }
}

