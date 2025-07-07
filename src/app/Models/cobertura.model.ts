export interface DtoProductosRequestCont {
  sku: string;
  cantidad: number;
}

export interface DtoRequestObtenerCoberturaPorZona {
  request: DtoProductosRequestCont[];
  idZona: number;
}

export interface DtoRequestCoberturaPorCiudad {
  request: DtoProductosRequestCont[];
  idCiudad: number;
}

export interface DtoRequestCoberturaPorDepartamento {
  request: DtoProductosRequestCont[];
  idDepto: number;
}

export interface DtoProductoCoberturaDetalle {
  prdLvlNumber: string;
  cantidadSku: number;
  sigla: string;
}


export interface DtoJsonResponseCobertura {
  idZona: number;
  idCiudad: number;
  idDepto: number;
  promesa: string;
  idPromesaCliente: number;
  idRedZona?: number;
  productos: DtoProductoCoberturaDetalle[];
}
