import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Funcionario } from 'src/app/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent {
  @Input() funcionarioData: Funcionario | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router
  ) { }

  funcionarioForm!: FormGroup;

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required]),
      naturalidade: new FormControl('', [Validators.required]),
      anoAdmissao: new FormControl('', [Validators.required]),
      hobbie: new FormControl('', [Validators.required]),
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
          this.funcionarioForm.patchValue({ foto: this.imageShow });
        }
      }
    }
  }

  get nome() {
    return this.funcionarioForm.get('nome')!;
  }

  get cargo() {
    return this.funcionarioForm.get('cargo')!;
  }

  get idade() {
    return this.funcionarioForm.get('idade')!;
  }

  get naturalidade() {
    return this.funcionarioForm.get('naturalidade')!;
  }

  get anoAdmissao() {
    return this.funcionarioForm.get('anoAdmissao')!;
  }

  get hobbie() {
    return this.funcionarioForm.get('hobbie')!;
  }

  submit() {
    if (this.funcionarioForm.invalid) {
      return;
    }

    this.funcionariosService.createFuncionario(this.funcionarioForm.value).subscribe();

    location.replace('/funcionarios');
  }
}

