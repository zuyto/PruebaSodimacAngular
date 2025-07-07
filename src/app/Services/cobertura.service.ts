import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response.model';
import { DtoJsonResponseCobertura, DtoProductosRequestCont } from '../Models/cobertura.model';

@Injectable({ providedIn: 'root' })
export class CoberturaService {

  private urlAPi: string;
  private CoberturaPorZona: string;
  private CoberturaPorCiudad: string;
  private CoberturaPorDepartamento: string;


  constructor(private http: HttpClient) {
    this.urlAPi = environment.urlApi;
    this.CoberturaPorZona = environment.CoberturaPorZona;
    this.CoberturaPorCiudad = environment.CoberturaPorCiudad;
    this.CoberturaPorDepartamento = environment.CoberturaPorDepartamento;

  }

  obtenerCoberturaPorZona(skus: DtoProductosRequestCont[], idZona: number): Observable<ApiResponse<DtoJsonResponseCobertura[]>> {
    const body = { request: skus, idZona };
    return this.http.post<ApiResponse<DtoJsonResponseCobertura[]>>(`${this.urlAPi}${this.CoberturaPorZona}`, body);
  }

  obtenerCoberturaPorCiudad(skus: DtoProductosRequestCont[], idCiudad: number): Observable<ApiResponse<DtoJsonResponseCobertura[]>> {
    const body = { request: skus, idCiudad };
    return this.http.post<ApiResponse<DtoJsonResponseCobertura[]>>(`${this.urlAPi}${this.CoberturaPorCiudad}`, body);
  }

  obtenerCoberturaPorDepto(skus: DtoProductosRequestCont[], idDepto: number): Observable<ApiResponse<DtoJsonResponseCobertura[]>> {
    const body = { request: skus, idDepto };
    return this.http.post<ApiResponse<DtoJsonResponseCobertura[]>>(`${this.urlAPi}${this.CoberturaPorDepartamento}`, body);
  }
}
