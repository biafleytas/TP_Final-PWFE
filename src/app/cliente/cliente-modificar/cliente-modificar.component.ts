import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../model/cliente";
import {ServiceclienteService} from "../../service/servicecliente.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./cliente-modificar.component.css']
})
export class ClienteModificarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioCliente: ServiceclienteService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.servicioCliente.getClientes().subscribe(clientes => {
        this.cliente = clientes.find((item: Cliente) => item.id_clientes == this.id) || new Cliente();
      });
    })};

  guardar(): void{
    this.servicioCliente.modificarCliente(this.cliente).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}
