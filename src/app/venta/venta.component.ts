import { Component, OnInit } from '@angular/core';
import {Venta} from "../model/venta";
import {ServiceventaService} from "../service/serviceventa.service";

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventas: Venta[] =[];

  constructor(private servicioVenta: ServiceventaService) { }

  ngOnInit(): void {
    this.servicioVenta.getVentas().subscribe(
      entity => this.ventas = entity,
      error =>console.log('no se pudieron conseguir las ventas')
    );
  }

}
