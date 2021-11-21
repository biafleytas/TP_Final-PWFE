import { Component, OnInit } from '@angular/core';
import {Venta} from "../model/venta";
import {ServiceventaService} from "../service/serviceventa.service";

@Component({
  selector: 'app-reporteresumido',
  templateUrl: './reporteresumido.component.html',
  styleUrls: ['./reporteresumido.component.css']
})
export class ReporteresumidoComponent implements OnInit {

  ventas: Venta[] =[];
  desde: string = "";
  hasta: string = "";
  cliente: string = "";

  constructor(private servicioVenta: ServiceventaService) { }

  ngOnInit(): void {
    this.servicioVenta.getVentas().subscribe(
      entity => this.ventas = entity,
      error =>console.log('no se pudieron conseguir las ventas')
    );
  }

  buscarCliente(): void{
    this.servicioVenta.getVentasPorCliente(this.cliente).subscribe(
      entity => this.ventas = entity,
      error =>console.log('no se pudieron conseguir las ventas')
    );
  }

  buscarFecha(): void{
    this.servicioVenta.getVentasPorFecha(this.desde, this.hasta).subscribe(
      entity => this.ventas = entity,
      error =>console.log('no se pudieron conseguir las ventas')
    );
  }

}
