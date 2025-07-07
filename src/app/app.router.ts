import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { RegistrarPedidosComponent } from './Components/pedidos/registrar-pedidos/registrar-pedidos.component';
import { ListarPodidosComponent } from './Components/pedidos/listar-podidos/listar-podidos.component';
import { ConsultarCoberturaComponent } from './Components/cobertura/consultar-cobertura/consultar-cobertura.component';




const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'RegistrarPedidos' },
  { path: 'RegistrarPedidos', component: RegistrarPedidosComponent },
  { path: 'ListarPedidos', component: ListarPodidosComponent },
  { path: 'Coberturas', component: ConsultarCoberturaComponent },


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

