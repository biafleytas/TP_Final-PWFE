import { Component, OnInit } from '@angular/core';
import {Detalle} from "../model/detalle";
import {ServicedetalleService} from "../service/servicedetalle.service";

@Component({
  selector: 'app-reportedetallado',
  templateUrl: './reportedetallado.component.html',
  styleUrls: ['./reportedetallado.component.css']
})
export class ReportedetalladoComponent implements OnInit {

  detalles: Detalle[] =[];
  producto: string = "";
  id: any;

  constructor(private servicioDetalle: ServicedetalleService) { }

  ngOnInit(): void {
    this.servicioDetalle.getDetalles().subscribe(
      entity => this.detalles = entity,
      error =>console.log('no se pudieron conseguir los detalles')
    );
  }

  buscarProducto(): void{
    this.servicioDetalle.getDetallesPorProducto(this.producto).subscribe(
      entity => this.detalles = entity,
      error =>console.log('no se pudieron conseguir los detalles')
    );
  }

}
