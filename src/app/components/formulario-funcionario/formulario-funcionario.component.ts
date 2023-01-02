import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Funcionario } from 'src/app/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-formulario-funcionario',
  templateUrl: './formulario-funcionario.component.html',
  styleUrls: ['./formulario-funcionario.component.css']
})
export class FormularioFuncionarioComponent {
  @Input() btnText!: string;
  @Input() funcionarioData: Funcionario | null = null;

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router
  ) { }

  funcionarioForm!: FormGroup;

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      _id: new FormControl(this.funcionarioData ? this.funcionarioData._id : ''),
      nome: new FormControl(this.funcionarioData ? this.funcionarioData.nome : '', [Validators.required]),
      cargo: new FormControl(this.funcionarioData ? this.funcionarioData.cargo : '', [Validators.required]),
      idade: new FormControl(this.funcionarioData ? this.funcionarioData.idade : '', [Validators.required]),
      naturalidade: new FormControl(this.funcionarioData ? this.funcionarioData.naturalidade : '', [Validators.required]),
      anoAdmissao: new FormControl(this.funcionarioData ? this.funcionarioData.anoAdmissao : '', [Validators.required]),
      hobbie: new FormControl(this.funcionarioData ? this.funcionarioData.hobbie : '', [Validators.required])
    });
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

    this.funcionariosService.updateFuncionario(this.funcionarioData!._id!, this.funcionarioForm.value).subscribe();

    location.replace('/funcionarios');
  }
}
