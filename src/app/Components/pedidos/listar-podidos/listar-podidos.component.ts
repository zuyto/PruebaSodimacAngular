import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/Services/pedidos.service';
import { Pedido } from 'src/app/Models/pedido.model';

@Component({
  selector: 'app-listar-podidos',
  templateUrl: './listar-podidos.component.html',
  styleUrls: ['./listar-podidos.component.css']
})
export class ListarPodidosComponent implements OnInit {

 displayedColumns: string[] = ['idPedido', 'idCliente', 'estado', 'fechaEntrega', 'acciones'];
  pedidos: Pedido[] = [];
  idCliente: number = 0;
  error?: string;

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
  }


buscarPedidos() {
    if (!this.idCliente) {
      this.error = 'Debe ingresar un ID de cliente';
      this.pedidos = [];
      return;
    }

    this.pedidosService.getPedidosPorCliente(this.idCliente).subscribe({
      next: (res) => {
        this.pedidos = res.result;
        this.error = undefined;
      },
      error: (err) => {
        this.error = 'Error consultando pedidos';
        this.pedidos = [];
      }
    });
  }

  cambiarEstado(pedido: Pedido) {
    // Aquí puedes implementar el cambio de estado
    console.log('Cambiar estado pedido:', pedido.idPedido);
  }

}
