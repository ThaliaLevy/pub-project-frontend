import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Funcionario } from 'src/app/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.css']
})

export class EditarFuncionariosComponent {
  funcionario!: Funcionario;
  btnText: string = 'Salvar edição';

  constructor(
    private funcionariosService: FuncionariosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.funcionariosService.getFuncionario(_id).subscribe((item) => {
      this.funcionario = item;
    })
  }
}
