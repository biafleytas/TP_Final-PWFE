import {Cliente} from "./cliente";
import {Detalle} from "./detalle";

export class Venta {
  id_ventas!: number;
  fecha!: string;
  factura!: string;
  id_clientes!: number;
  ventaCliente!: Cliente;
  detalleVenta!: Detalle[];
  total!: number;
}
