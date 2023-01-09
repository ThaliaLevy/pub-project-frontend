import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bebida } from 'src/app/Bebida';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-editar-bebidas',
  templateUrl: './editar-bebidas.component.html',
  styleUrls: ['./editar-bebidas.component.css']
})
export class EditarBebidasComponent {
  bebida!: Bebida;
  btnText: string = 'Salvar edição';

  constructor(
    private bebidasService: BebidasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.bebidasService.getBebida(_id).subscribe((item) => {
      this.bebida = item;
    })
  }
}
