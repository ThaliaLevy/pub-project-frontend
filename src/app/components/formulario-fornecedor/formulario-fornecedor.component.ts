import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Fornecedor } from 'src/app/Fornecedor';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-formulario-fornecedor',
  templateUrl: './formulario-fornecedor.component.html',
  styleUrls: ['./formulario-fornecedor.component.css']
})
export class FormularioFornecedorComponent {
  @Input() btnText!: string;
  @Input() fornecedorData: Fornecedor | null = null;

  constructor(
    private fornecedoresService: FornecedoresService,
  ) { }

  fornecedorForm!: FormGroup;

  ngOnInit(): void {
    this.fornecedorForm = new FormGroup({
      _id: new FormControl(this.fornecedorData ? this.fornecedorData._id : ''),
      nome: new FormControl(this.fornecedorData ? this.fornecedorData.nome : '', [Validators.required]),
      descricao: new FormControl(this.fornecedorData ? this.fornecedorData.descricao : '', [Validators.required]),
    });
  }

  get nome() {
    return this.fornecedorForm.get('nome')!;
  }

  get descricao() {
    return this.fornecedorForm.get('descricao')!;
  }

  submit() {
    if (this.fornecedorForm.invalid) {
      return;
    }

    this.fornecedoresService.updateFornecedor(this.fornecedorData!._id!, this.fornecedorForm.value).subscribe();
    
    location.replace('/fornecedores');
  }
}
