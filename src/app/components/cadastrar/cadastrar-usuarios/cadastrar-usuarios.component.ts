import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Usuario } from 'src/app/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent {
  @Input() usuarioData: Usuario | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
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

  get senha() {
    return this.usuarioForm.get('senha')!;
  }

  submit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.usuariosService.createUsuario(this.usuarioForm.value).subscribe();

    location.replace('/usuarios');
  }
}
