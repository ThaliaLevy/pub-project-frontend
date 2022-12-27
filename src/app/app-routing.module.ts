import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarFuncionariosComponent } from './components/editar/editar-funcionarios/editar-funcionarios.component';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosComponent } from './components/paginas/agendamentos/agendamentos.component';
import { BebidasComponent } from './components/paginas/bebidas/bebidas.component';
import { ComidasComponent } from './components/paginas/comidas/comidas.component';
import { EventosComponent } from './components/paginas/eventos/eventos.component';
import { FornecedoresComponent } from './components/paginas/fornecedores/fornecedores.component';
import { FuncionariosComponent } from './components/paginas/funcionarios/funcionarios.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'agendamentos', component: AgendamentosComponent},
  {path: 'bebidas', component: BebidasComponent},
  {path: 'comidas', component: ComidasComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'funcionarios/editar/:_id', component: EditarFuncionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
