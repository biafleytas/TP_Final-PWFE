import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../model/producto";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceproductoService {

  private api: string ="http://localhost:9090/api/producto";

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.api);
  }

  agregarProducto(p:Producto): Observable<Producto> {
    return this.http
      .post<Producto>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

  deleteProducto(id: number){
    return this.http.delete(this.api+'/'+id);
  }

  modificarProducto(p:Producto): Observable<void> {
    return this.http
      .put<void>(this.api+'/'+p.id_productos, p);
  }

  getProductoNombre(nombre: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.api+'?nombre='+nombre.toString());
  }
}
