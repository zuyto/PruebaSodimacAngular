import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/api-response.model';
import { environment } from 'src/environments/environment';
import { DtoCambiarEstadoRequest, DtoJsonResponseSaas, DtoPedidoRequest, Pedido } from '../Models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private urlAPi: string;
  private RegistrarPedidos: string;
  private GetPedidosPorCliente: string;
  private CambiarEstadoPedido: string;
  private AsignarRutaDesdeSaas: string;

  constructor(private http: HttpClient) {
    this.urlAPi = environment.urlApi;
    this.RegistrarPedidos = environment.RegistrarPedidos;
    this.GetPedidosPorCliente = environment.GetPedidosPorCliente;
    this.CambiarEstadoPedido = environment.CambiarEstadoPedido;
    this.AsignarRutaDesdeSaas = environment.AsignarRutaDesdeSaas;
   }

  registrarPedidos(request: DtoPedidoRequest[]): Observable<ApiResponse<DtoJsonResponseSaas>> {
    return this.http.post<ApiResponse<DtoJsonResponseSaas>>(`${this.urlAPi + this.RegistrarPedidos}`, request);
  }

  getPedidosPorCliente(idCliente: number): Observable<ApiResponse<Pedido[]>> {
    return this.http.post<ApiResponse<Pedido[]>>(`${this.urlAPi+ this.GetPedidosPorCliente}`, idCliente);
  }

  // cambiarEstadoPedido(request: DtoCambiarEstadoRequest): Observable<ApiResponse<DtoJsonResponse>> {
  //   return this.http.put<ApiResponse<DtoJsonResponse>>(`${this.urlAPi+ this.CambiarEstadoPedido}`, request);
  // }

  asignarRutaDesdeSaas(idPedido: number): Observable<ApiResponse<DtoJsonResponseSaas>> {
    return this.http.put<ApiResponse<DtoJsonResponseSaas>>(`${this.urlAPi+ this.AsignarRutaDesdeSaas}`, idPedido);
  }
}
