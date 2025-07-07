export interface DtoPedidoRequest {
  idCliente: number;
  productos: DtoProductoRequest[];
  fechaEntrega: string; // YYYY-MM-DD
  direccionEntrega: string;
  idDireccionEntrega?: number;
}

export interface DtoProductoRequest {
  idProducto: number;
  cantidad: number;
}

export interface DtoCambiarEstadoRequest {
  idPedido: number;
  nuevoEstado: number;
}

export interface DtoJsonResponseSaas {
  estado: boolean;
  mensaje?: string;
  value?: any;
  codInterno?: string;
  pedido?: string;
}

export interface DtoErrorResponse {
  tipoExcepcion?: string;
  mensaje?: string;
  objeto?: string;
  metodo?: string;
  stacktrace?: string;
  detalleInnerException?: string;
}

export interface Pedido {
  idPedido: number;
  idCliente: number;
  fechaPedido: string;
  fechaEntrega: string;
  idEstadoPedido: number;
  idDireccionEntrega: number;
  rutaAsignadaId?: number;
  observaciones?: string;
}
