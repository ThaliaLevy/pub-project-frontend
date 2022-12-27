import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


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
    EditarFuncionariosComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
