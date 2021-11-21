import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Venta} from "../model/venta";

@Injectable({
  providedIn: 'root'
})
export class ServiceventaService {

  private api: string ="http://localhost:9090/api/ventas";

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.api);
  }

  getVentasPorFecha(desde: string, hasta: string): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.api+'/fecha?desde='+desde.toString()+'&hasta='+hasta.toString());
  }

  getVentasPorCliente(cliente: string): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.api+'/cliente?id_clientes='+cliente.toString());
  }

  agregarVenta(p:Venta): Observable<Venta> {
    return this.http
      .post<Venta>(this.api, p)
      .pipe(
        tap( // Log the result or error
          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

}
