import { Component, OnInit } from '@angular/core';
import {Venta} from "../../model/venta";
import {Detalle} from "../../model/detalle";
import {ServiceventaService} from "../../service/serviceventa.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  venta: Venta= new Venta();
  detalles: Detalle[] =[];
  producto: string = "";
  sub: any;
  id: any;

  constructor(private servicioVenta: ServiceventaService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(){
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.servicioVenta.getVentas().subscribe(ventas => {
        this.venta = ventas.find((item: Venta) => item.id_ventas == this.id) || new Venta();
      });
    })};

}
