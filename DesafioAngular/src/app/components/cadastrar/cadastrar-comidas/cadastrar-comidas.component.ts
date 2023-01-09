import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Comida } from 'src/app/Comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-cadastrar-comidas',
  templateUrl: './cadastrar-comidas.component.html',
  styleUrls: ['./cadastrar-comidas.component.css']
})
export class CadastrarComidasComponent {
  @Input() comidaData: Comida | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private comidasService: ComidasService,
  ) { }

  comidaForm!: FormGroup;

  ngOnInit(): void {
    this.comidaForm = new FormGroup({
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
          this.comidaForm.patchValue({ foto: this.imageShow });
        }
      }
    }
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

    this.comidasService.createComida(this.comidaForm.value).subscribe();

    location.replace('/comidas');
  }
}
