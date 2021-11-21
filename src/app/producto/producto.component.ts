import { Component, OnInit } from '@angular/core';
import {Producto} from "../model/producto";
import {ServiceproductoService} from "../service/serviceproducto.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  nombre: string = "";

  constructor(private servicioProducto: ServiceproductoService) { }

  ngOnInit(): void {
    this.servicioProducto.getProductos().subscribe(
      entity => this.productos = entity,
      error =>console.log('no se pudieron conseguir los productos')
    );
  }

  deleteItem(p: number){
    this.servicioProducto.deleteProducto(p)
      .subscribe(response => {
        this.productos = this.productos.filter(item => item.id_productos !== p);
      })
  }

  buscarProducto(): void{
    this.servicioProducto.getProductoNombre(this.nombre).subscribe(
      entity => this.productos = entity,
      error =>console.log('no se pudieron conseguir los productos')
    );
  }
}
