import { Component, OnInit } from '@angular/core';
import {ServicedetalleService} from "../../service/servicedetalle.service";
import {Detalle} from "../../model/detalle";
import {Producto} from "../../model/producto";
import {ServiceproductoService} from "../../service/serviceproducto.service";
import {ActivatedRoute} from "@angular/router";
import {ServiceventaService} from "../../service/serviceventa.service";
import {Venta} from "../../model/venta";

@Component({
  selector: 'app-detalle-agregar',
  templateUrl: './detalle-agregar.component.html',
  styleUrls: ['./detalle-agregar.component.css']
})
export class DetalleAgregarComponent implements OnInit {

  detalle: Detalle = new Detalle();
  producto: Producto = new Producto();
  venta: Venta = new Venta();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioDetalle: ServicedetalleService, private servicioVenta: ServiceventaService, private servicioProducto: ServiceproductoService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.detalle.id_ventas = this.id;
      this.servicioVenta.getVentas().subscribe(ventas => {
        this.venta = ventas.find((item: Venta) => item.id_ventas == this.id) || new Venta();
      });
    })};

  guardar(): void{
    this.servicioProducto.getProductos().subscribe(productos => {
      this.producto = productos.find((item: Producto) => item.id_productos == this.detalle.id_productos) || new Producto();
      this.detalle.total = this.producto.precio * this.detalle.cantidad;
      this.servicioDetalle.agregarDetalle(this.detalle).subscribe(
        () => {
          this.mensaje='Agregado exitosamente'
          this.ngOnInit();
        },
        error => console.log("error: "+error)
      );
    });
  }
}
