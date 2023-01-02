import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Fornecedor } from 'src/app/Fornecedor';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-editar-fornecedores',
  templateUrl: './editar-fornecedores.component.html',
  styleUrls: ['./editar-fornecedores.component.css']
})
export class EditarFornecedoresComponent {
  fornecedor!: Fornecedor;
  btnText: string = 'Salvar edição';

  constructor(
    private fornecedoresService: FornecedoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.fornecedoresService.getFornecedor(_id).subscribe((item) => {
      this.fornecedor = item;
    })
  }
}
