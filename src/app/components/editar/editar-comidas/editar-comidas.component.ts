import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Comida } from 'src/app/Comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-editar-comidas',
  templateUrl: './editar-comidas.component.html',
  styleUrls: ['./editar-comidas.component.css']
})
export class EditarComidasComponent {
  comida!: Comida;
  btnText: string = 'Salvar edição';

  constructor(
    private comidasService: ComidasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.comidasService.getComida(_id).subscribe((item) => {
      this.comida = item;
    })
  }
}
