import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../model/cliente";
import {ServiceclienteService} from "../../service/servicecliente.service";

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styleUrls: ['./cliente-agregar.component.css']
})
export class ClienteAgregarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  mensaje: string = "";

  constructor(private servicioCliente: ServiceclienteService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.servicioCliente.agregarCliente(this.cliente).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
