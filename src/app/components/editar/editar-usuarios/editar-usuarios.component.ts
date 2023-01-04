import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Usuario } from 'src/app/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent {
  usuario!: Usuario;
  btnText: string = 'Salvar edição';

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.usuariosService.getUsuario(_id).subscribe((item) => {
      this.usuario = item;
    })
  }
}
