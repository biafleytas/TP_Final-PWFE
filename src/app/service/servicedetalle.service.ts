import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Detalle} from "../model/detalle";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicedetalleService {

  private api: string ="http://localhost:9090/api/detalles";

  constructor(private http: HttpClient) { }

  getDetalles(): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.api);
  }

  getDetallesPorProducto(producto: string): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.api+'/producto?id_productos='+producto.toString());
  }

  agregarDetalle(p:Detalle): Observable<Detalle> {
    return this.http
      .post<Detalle>(this.api, p)
      .pipe(
        tap( // Log the result or error
          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }
}
