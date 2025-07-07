import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.router';

// componentes
import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { ListarPodidosComponent } from './Components/pedidos/listar-podidos/listar-podidos.component';
import { RegistrarPedidosComponent } from './Components/pedidos/registrar-pedidos/registrar-pedidos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarCoberturaComponent } from './Components/cobertura/consultar-cobertura/consultar-cobertura.component';



const rutas: Routes = [
{path: '', redirectTo: 'inicio', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    ListarPodidosComponent,
    RegistrarPedidosComponent,
    ConsultarCoberturaComponent
  ],
  imports: [
    BrowserModule,
    CompartidoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
