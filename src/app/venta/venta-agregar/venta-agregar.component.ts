import { Component, OnInit } from '@angular/core';
import {Venta} from "../../model/venta";
import {ServiceventaService} from "../../service/serviceventa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-venta-agregar',
  templateUrl: './venta-agregar.component.html',
  styleUrls: ['./venta-agregar.component.css']
})
export class VentaAgregarComponent implements OnInit {

  venta: Venta = new Venta();
  mensaje: string = "";
  idVenta: number = 0;

  constructor(private servicioVenta: ServiceventaService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.venta.total = 0;
    this.servicioVenta.agregarVenta(this.venta).subscribe(
      ventas => {
        this.idVenta = ventas.id_ventas
        this.mensaje='.'
      },
      error => console.log("error: "+error)
    );
  }
}
