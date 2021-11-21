import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ActivatedRoute} from "@angular/router";
import {ServiceproductoService} from "../../service/serviceproducto.service";

@Component({
  selector: 'app-producto-modificar',
  templateUrl: './producto-modificar.component.html',
  styleUrls: ['./producto-modificar.component.css']
})
export class ProductoModificarComponent implements OnInit {

  producto: Producto = new Producto();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioProducto: ServiceproductoService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(){
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.servicioProducto.getProductos().subscribe(productos => {
        this.producto = productos.find((item: Producto) => item.id_productos == this.id) || new Producto();
      });
    })};

  guardar(): void{
    this.servicioProducto.modificarProducto(this.producto).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
