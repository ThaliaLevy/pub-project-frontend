import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CadastrarAgendamentoComponent } from './components/cadastrar/cadastrar-agendamento/cadastrar-agendamento.component';
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
import { FormularioAgendamentosComponent } from './components/formulario-agendamentos/formulario-agendamentos.component';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosUsuarioComponent } from './components/paginas/agendamentos-usuario/agendamentos-usuario.component';
import { AgendamentosComponent } from './components/paginas/agendamentos/agendamentos.component';
import { BebidasComponent } from './components/paginas/bebidas/bebidas.component';
import { ComidasComponent } from './components/paginas/comidas/comidas.component';
import { EventosComponent } from './components/paginas/eventos/eventos.component';
import { FornecedoresComponent } from './components/paginas/fornecedores/fornecedores.component';
import { FuncionariosComponent } from './components/paginas/funcionarios/funcionarios.component';
import { UsuariosComponent } from './components/paginas/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'eventos/editar/:_id', component: EditarEventosComponent, canActivate: [AuthGuard] },
  { path: 'eventos/editar-foto/:_id', component: FotoEventosComponent, canActivate: [AuthGuard] },
  { path: 'eventos/cadastrar', component: CadastrarEventosComponent, canActivate: [AuthGuard] },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'agendamentos/usuario/:_id', component: CadastrarAgendamentoComponent },
  { path: 'agendamentos/usuario', component: AgendamentosUsuarioComponent },
  { path: 'agendamentos/editar/:_id', component: FormularioAgendamentosComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'bebidas/editar/:_id', component: EditarBebidasComponent, canActivate: [AuthGuard] },
  { path: 'bebidas/editar-foto/:_id', component: FotoBebidasComponent, canActivate: [AuthGuard] },
  { path: 'bebidas/cadastrar', component: CadastrarBebidasComponent, canActivate: [AuthGuard] },
  { path: 'comidas', component: ComidasComponent },
  { path: 'comidas/editar/:_id', component: EditarComidasComponent, canActivate: [AuthGuard] },
  { path: 'comidas/editar-foto/:_id', component: FotoComidasComponent, canActivate: [AuthGuard] },
  { path: 'comidas/cadastrar', component: CadastrarComidasComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores', component: FornecedoresComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores/editar/:_id', component: EditarFornecedoresComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores/editar-foto/:_id', component: FotoFornecedoresComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores/cadastrar', component: CadastrarFornecedoresComponent, canActivate: [AuthGuard] },
  { path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuard] },
  { path: 'funcionarios/editar/:_id', component: EditarFuncionariosComponent, canActivate: [AuthGuard] },
  { path: 'funcionarios/editar-foto/:_id', component: FotoFuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'funcionarios/cadastrar', component: CadastrarFuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/editar/:_id', component: EditarUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/cadastrar', component: CadastrarUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
