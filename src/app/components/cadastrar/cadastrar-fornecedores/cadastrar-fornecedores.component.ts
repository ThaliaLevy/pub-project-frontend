import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Fornecedor } from 'src/app/Fornecedor';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-cadastrar-fornecedores',
  templateUrl: './cadastrar-fornecedores.component.html',
  styleUrls: ['./cadastrar-fornecedores.component.css']
})
export class CadastrarFornecedoresComponent {
  @Input() fornecedorData: Fornecedor | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private fornecedoresService: FornecedoresService,
    private router: Router
  ) { }

  fornecedorForm!: FormGroup;

  ngOnInit(): void {
    this.fornecedorForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
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
          this.fornecedorForm.patchValue({ foto: this.imageShow });
        }
      }
    }
  }

  get nome() {
    return this.fornecedorForm.get('nome')!;
  }

  get descricao() {
    return this.fornecedorForm.get('descricao')!;
  }

  submit() {
    if (this.fornecedorForm.invalid || this.tamanhoExcedido.length > 0) {
      return;
    }

    this.fornecedoresService.createFornecedor(this.fornecedorForm.value).subscribe();

    location.replace('/fornecedores');
  }
}
