import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PedidosService } from 'src/app/Services/pedidos.service';
import { DtoPedidoRequest } from 'src/app/Models/pedido.model';

@Component({
  selector: 'app-registrar-pedidos',
  templateUrl: './registrar-pedidos.component.html',
  styleUrls: ['./registrar-pedidos.component.css']
})
export class RegistrarPedidosComponent implements OnInit {


  pedidoForm: FormGroup;
  respuesta?: any;


  constructor(private fb: FormBuilder, private pedidosService: PedidosService) {
    this.pedidoForm = this.fb.group({
      idCliente: ['', Validators.required],
      direccionEntrega: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      productos: this.fb.array([])
    });
  }

  get productos(): FormArray {
    return this.pedidoForm.get('productos') as FormArray;
  }


  agregarProducto() {
    this.productos.push(this.fb.group({
      idProducto: ['', Validators.required],
      cantidad: ['', Validators.required]
    }));
  }

  eliminarProducto(index: number) {
    this.productos.removeAt(index);
  }

  registrarPedido() {
    const pedido: DtoPedidoRequest = this.pedidoForm.value;
    pedido.fechaEntrega = new Date(pedido.fechaEntrega).toISOString().split('T')[0]; // Formato YYYY-MM-DD

    this.pedidosService.registrarPedidos([pedido]).subscribe({
      next: (res) => this.respuesta = res,
      error: (err) => this.respuesta = err
    });
  }

  ngOnInit(): void {
  }

}
