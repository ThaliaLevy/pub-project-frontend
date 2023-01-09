import { Component } from '@angular/core';

import { Bebida } from 'src/app/Bebida';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
  constructor(
    private bebidaService: BebidasService,
  ) { }

  todasAsBebidas: Bebida[] = [];
  bebidasFiltradas: Bebida[] = [];
  isAdmin!: boolean;
  value = '';

  ngOnInit(): void {
    this.bebidaService.getBebidas().subscribe((bebidasDB) => {
      this.bebidasFiltradas = bebidasDB;
      this.todasAsBebidas = bebidasDB;
    })

    this.isAdmin = JSON.parse(localStorage.getItem("isAdmin")!);
  }

  recarregarTodosOsUsuarios() {
    this.bebidaService.getBebidas().subscribe((bebidasDB) => {
      this.bebidasFiltradas = bebidasDB;
      this.todasAsBebidas = bebidasDB;
    })
  }

  async excluirBebida(_id: string) {
    await this.bebidaService.deleteBebida(_id).subscribe();

    window.location.reload();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.bebidasFiltradas = this.todasAsBebidas.filter((bebida) =>
      bebida.nome.toLowerCase().includes(value));
  }
}
