import { Component, OnInit } from '@angular/core';
import {Cliente} from "../model/cliente";
import {ServiceclienteService} from "../service/servicecliente.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  nombre: string = "";

  constructor(private servicioCliente: ServiceclienteService) { }

  ngOnInit(): void {
    this.servicioCliente.getClientes().subscribe(
      entity => this.clientes = entity,
      error =>console.log('no se pudieron conseguir los clientes')
    );
  }

  deleteItem(p: number){
    this.servicioCliente.deleteCliente(p)
      .subscribe(response => {
        this.clientes = this.clientes.filter(item => item.id_clientes !== p);
      })
  }

  buscarCliente(): void{
    this.servicioCliente.getClienteNombre(this.nombre).subscribe(
      entity => this.clientes = entity,
      error =>console.log('no se pudieron conseguir los clientes')
    );
  }
}
