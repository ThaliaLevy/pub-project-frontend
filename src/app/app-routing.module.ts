import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarBebidasComponent } from './components/cadastrar/cadastrar-bebidas/cadastrar-bebidas.component';
import { CadastrarFuncionarioComponent } from './components/cadastrar/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarBebidasComponent } from './components/editar/editar-bebidas/editar-bebidas.component';
import { EditarFuncionariosComponent } from './components/editar/editar-funcionarios/editar-funcionarios.component';
import { FotoBebidasComponent } from './components/editar/foto-bebidas/foto-bebidas.component';
import { FotoFuncionarioComponent } from './components/editar/foto-funcionario/foto-funcionario.component';
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
  {path: 'bebidas/editar/:_id', component: EditarBebidasComponent},
  {path: 'bebidas/editar-foto/:_id', component: FotoBebidasComponent},
  {path: 'bebidas/cadastrar', component: CadastrarBebidasComponent},
  {path: 'comidas', component: ComidasComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'funcionarios/editar/:_id', component: EditarFuncionariosComponent},
  {path: 'funcionarios/editar-foto/:_id', component: FotoFuncionarioComponent},
  {path: 'funcionarios/cadastrar', component: CadastrarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
