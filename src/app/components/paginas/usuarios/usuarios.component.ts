import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  todosOsUsuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];
  value = '';

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuariosDB) => {
      this.usuariosFiltrados = usuariosDB;
      this.todosOsUsuarios = usuariosDB;
    })
  }

  recarregarTodosOsUsuarios() {
    this.usuarioService.getUsuarios().subscribe((usuariosDB) => {
      this.usuariosFiltrados = usuariosDB;
      this.todosOsUsuarios = usuariosDB;
    })
  }

  async excluirUsuario(_id: string) {
    await this.usuarioService.deleteUsuario(_id).subscribe();

    window.location.reload();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.usuariosFiltrados = this.todosOsUsuarios.filter((usuario) =>
      usuario.nome.toLowerCase().includes(value));
  }
}
