import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CoberturaService } from 'src/app/Services/cobertura.service';
import { DtoProductosRequestCont, DtoJsonResponseCobertura } from 'src/app/Models/cobertura.model';


@Component({
  selector: 'app-consultar-cobertura',
  templateUrl: './consultar-cobertura.component.html',
  styleUrls: ['./consultar-cobertura.component.css']
})
export class ConsultarCoberturaComponent implements OnInit {

  coberturaForm: FormGroup;
  resultadoCobertura: DtoJsonResponseCobertura[] = [];
  tipoConsulta: 'zona' | 'ciudad' | 'depto' = 'zona';

  constructor(private fb: FormBuilder, private coberturaService: CoberturaService) {
    this.coberturaForm = this.fb.group({
      id: ['', Validators.required],
      productos: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }


  get productos(): FormArray {
    return this.coberturaForm.get('productos') as FormArray;
  }

  agregarProducto() {
    this.productos.push(this.fb.group({
      sku: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]]
    }));
  }

  eliminarProducto(index: number) {
    this.productos.removeAt(index);
  }

  buscarCobertura() {
    const request: DtoProductosRequestCont[] = this.productos.value;
    const id = this.coberturaForm.value.id;

    if (this.tipoConsulta === 'zona') {
      this.coberturaService.obtenerCoberturaPorZona(request, id).subscribe(res => this.resultadoCobertura = res.result);
    } else if (this.tipoConsulta === 'ciudad') {
      this.coberturaService.obtenerCoberturaPorCiudad(request, id).subscribe(res => this.resultadoCobertura = res.result);
    } else if (this.tipoConsulta === 'depto') {
      this.coberturaService.obtenerCoberturaPorDepto(request, id).subscribe(res => this.resultadoCobertura = res.result);
    }
  }

}
