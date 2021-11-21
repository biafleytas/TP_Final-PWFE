import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ServiceproductoService} from "../../service/serviceproducto.service";

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {

  producto: Producto = new Producto();
  mensaje: string = "";

  constructor(private servicioProducto: ServiceproductoService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.servicioProducto.agregarProducto(this.producto).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}
