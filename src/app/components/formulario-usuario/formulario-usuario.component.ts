import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Usuario } from 'src/app/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent {
  @Input() btnText!: string;
  @Input() usuarioData: Usuario | null = null;

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      _id: new FormControl(this.usuarioData ? this.usuarioData._id : ''),
      nome: new FormControl(this.usuarioData ? this.usuarioData.nome : '', [Validators.required]),
      cpf: new FormControl(this.usuarioData ? this.usuarioData.cpf : '', [Validators.required]),
      telefone: new FormControl(this.usuarioData ? this.usuarioData.telefone : '', [Validators.required]),
      email: new FormControl(this.usuarioData ? this.usuarioData.email : '', [Validators.required]),
    });
  }

  get nome() {
    return this.usuarioForm.get('nome')!;
  }

  get cpf() {
    return this.usuarioForm.get('cpf')!;
  }

  get telefone() {
    return this.usuarioForm.get('telefone')!;
  }

  get email() {
    return this.usuarioForm.get('email')!;
  }

  submit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.usuariosService.updateUsuario(this.usuarioData!._id!, this.usuarioForm.value).subscribe();

    location.replace('/usuarios');
  }
}
