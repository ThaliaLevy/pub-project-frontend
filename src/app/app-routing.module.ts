import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarBebidasComponent } from './components/cadastrar/cadastrar-bebidas/cadastrar-bebidas.component';
import { CadastrarComidasComponent } from './components/cadastrar/cadastrar-comidas/cadastrar-comidas.component';
import { CadastrarEventosComponent } from './components/cadastrar/cadastrar-eventos/cadastrar-eventos.component';
import { CadastrarFornecedoresComponent } from './components/cadastrar/cadastrar-fornecedores/cadastrar-fornecedores.component';
import { CadastrarFuncionarioComponent } from './components/cadastrar/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarUsuariosComponent } from './components/cadastrar/cadastrar-usuarios/cadastrar-usuarios.component';
import { EditarBebidasComponent } from './components/editar/editar-bebidas/editar-bebidas.component';
import { EditarComidasComponent } from './components/editar/editar-comidas/editar-comidas.component';
import { EditarEventosComponent } from './components/editar/editar-eventos/editar-eventos.component';
import { EditarFornecedoresComponent } from './components/editar/editar-fornecedores/editar-fornecedores.component';
import { EditarFuncionariosComponent } from './components/editar/editar-funcionarios/editar-funcionarios.component';
import { EditarUsuariosComponent } from './components/editar/editar-usuarios/editar-usuarios.component';
import { FotoBebidasComponent } from './components/editar/foto-bebidas/foto-bebidas.component';
import { FotoComidasComponent } from './components/editar/foto-comidas/foto-comidas.component';
import { FotoEventosComponent } from './components/editar/foto-eventos/foto-eventos.component';
import { FotoFornecedoresComponent } from './components/editar/foto-fornecedores/foto-fornecedores.component';
import { FotoFuncionarioComponent } from './components/editar/foto-funcionario/foto-funcionario.component';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosComponent } from './components/paginas/agendamentos/agendamentos.component';
import { BebidasComponent } from './components/paginas/bebidas/bebidas.component';
import { ComidasComponent } from './components/paginas/comidas/comidas.component';
import { EventosComponent } from './components/paginas/eventos/eventos.component';
import { FornecedoresComponent } from './components/paginas/fornecedores/fornecedores.component';
import { FuncionariosComponent } from './components/paginas/funcionarios/funcionarios.component';
import { UsuariosComponent } from './components/paginas/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'eventos/editar/:_id', component: EditarEventosComponent},
  {path: 'eventos/editar-foto/:_id', component: FotoEventosComponent},
  {path: 'eventos/cadastrar', component: CadastrarEventosComponent},
  {path: 'agendamentos', component: AgendamentosComponent},
  {path: 'bebidas', component: BebidasComponent},
  {path: 'bebidas/editar/:_id', component: EditarBebidasComponent},
  {path: 'bebidas/editar-foto/:_id', component: FotoBebidasComponent},
  {path: 'bebidas/cadastrar', component: CadastrarBebidasComponent},
  {path: 'comidas', component: ComidasComponent},
  {path: 'comidas/editar/:_id', component: EditarComidasComponent},
  {path: 'comidas/editar-foto/:_id', component: FotoComidasComponent},
  {path: 'comidas/cadastrar', component: CadastrarComidasComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'fornecedores/editar/:_id', component: EditarFornecedoresComponent},
  {path: 'fornecedores/editar-foto/:_id', component: FotoFornecedoresComponent},
  {path: 'fornecedores/cadastrar', component: CadastrarFornecedoresComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'funcionarios/editar/:_id', component: EditarFuncionariosComponent},
  {path: 'funcionarios/editar-foto/:_id', component: FotoFuncionarioComponent},
  {path: 'funcionarios/cadastrar', component: CadastrarFuncionarioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/editar/:_id', component: EditarUsuariosComponent},
  {path: 'usuarios/cadastrar', component: CadastrarUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
