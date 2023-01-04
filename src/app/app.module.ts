import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/paginas/eventos/eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosComponent } from './components/paginas/agendamentos/agendamentos.component';
import { BebidasComponent } from './components/paginas/bebidas/bebidas.component';
import { ComidasComponent } from './components/paginas/comidas/comidas.component';
import { FornecedoresComponent } from './components/paginas/fornecedores/fornecedores.component';
import { FuncionariosComponent } from './components/paginas/funcionarios/funcionarios.component';
import { EditarFuncionariosComponent } from './components/editar/editar-funcionarios/editar-funcionarios.component';
import { CadastrarFuncionarioComponent } from './components/cadastrar/cadastrar-funcionario/cadastrar-funcionario.component';
import { FormularioFuncionarioComponent } from './components/formulario-funcionario/formulario-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FotoFuncionarioComponent } from './components/editar/foto-funcionario/foto-funcionario.component';
import { CadastrarBebidasComponent } from './components/cadastrar/cadastrar-bebidas/cadastrar-bebidas.component';
import { EditarBebidasComponent } from './components/editar/editar-bebidas/editar-bebidas.component';
import { FotoBebidasComponent } from './components/editar/foto-bebidas/foto-bebidas.component';
import { FormularioBebidasComponent } from './components/formulario-bebida/formulario-bebidas.component';
import { CadastrarComidasComponent } from './components/cadastrar/cadastrar-comidas/cadastrar-comidas.component';
import { EditarComidasComponent } from './components/editar/editar-comidas/editar-comidas.component';
import { FotoComidasComponent } from './components/editar/foto-comidas/foto-comidas.component';
import { FormularioComidaComponent } from './components/formulario-comida/formulario-comida.component';
import { FormularioFornecedorComponent } from './components/formulario-fornecedor/formulario-fornecedor.component';
import { EditarFornecedoresComponent } from './components/editar/editar-fornecedores/editar-fornecedores.component';
import { FotoFornecedoresComponent } from './components/editar/foto-fornecedores/foto-fornecedores.component';
import { CadastrarFornecedoresComponent } from './components/cadastrar/cadastrar-fornecedores/cadastrar-fornecedores.component';
import { CadastrarEventosComponent } from './components/cadastrar/cadastrar-eventos/cadastrar-eventos.component';
import { EditarEventosComponent } from './components/editar/editar-eventos/editar-eventos.component';
import { FotoEventosComponent } from './components/editar/foto-eventos/foto-eventos.component';
import { FormularioEventoComponent } from './components/formulario-evento/formulario-evento.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarUsuariosComponent } from './components/cadastrar/cadastrar-usuarios/cadastrar-usuarios.component';
import { EditarUsuariosComponent } from './components/editar/editar-usuarios/editar-usuarios.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { UsuariosComponent } from './components/paginas/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    HomeComponent,
    AgendamentosComponent,
    BebidasComponent,
    ComidasComponent,
    FornecedoresComponent,
    FuncionariosComponent,
    EditarFuncionariosComponent,
    CadastrarFuncionarioComponent,
    FormularioFuncionarioComponent,
    FotoFuncionarioComponent,
    CadastrarBebidasComponent,
    EditarBebidasComponent,
    FotoBebidasComponent,
    FormularioBebidasComponent,
    CadastrarComidasComponent,
    EditarComidasComponent,
    FotoComidasComponent,
    FormularioComidaComponent,
    FormularioFornecedorComponent,
    EditarFornecedoresComponent,
    FotoFornecedoresComponent,
    CadastrarFornecedoresComponent,
    CadastrarEventosComponent,
    EditarEventosComponent,
    FotoEventosComponent,
    FormularioEventoComponent,
    LoginComponent,
    CadastrarUsuariosComponent,
    EditarUsuariosComponent,
    FormularioUsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
