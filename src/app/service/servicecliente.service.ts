import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Cliente} from "../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ServiceclienteService {

  private api: string ="http://localhost:9090/api/clientes";

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.api);
  }

  agregarCliente(p:Cliente): Observable<Cliente> {
    return this.http
      .post<Cliente>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

  deleteCliente(id: number){
    return this.http.delete(this.api+'/'+id);
  }

  modificarCliente(p:Cliente): Observable<void> {
    return this.http
      .put<void>(this.api+'/'+p.id_clientes, p);
  }

  getClienteNombre(nombre: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.api+'?nombre='+nombre.toString());
  }
}
