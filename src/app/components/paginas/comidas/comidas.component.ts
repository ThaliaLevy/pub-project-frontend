import { Component } from '@angular/core';

import { Comida } from 'src/app/Comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {
  constructor(
    private comidaService: ComidasService,
  ) { }

  todasAsComidas: Comida[] = [];
  comidasFiltradas: Comida[] = [];
  value = '';

  ngOnInit(): void {
    this.comidaService.getComidas().subscribe((comidasDB) => {
      this.comidasFiltradas = comidasDB;
      this.todasAsComidas = comidasDB;
    })
  }

  async excluirComida(_id: string) {
    await this.comidaService.deleteComida(_id).subscribe();

    window.location.reload();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.comidasFiltradas = this.todasAsComidas.filter((comida) =>
    comida.nome.toLowerCase().includes(value));
  }
}
