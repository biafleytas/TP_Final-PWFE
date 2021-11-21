import {Producto} from "./producto";
import {Venta} from "./venta";

export class Detalle {
  id_detalles!: number;
  id_ventas!: number;
  id_productos!: number;
  cantidad!: number;
  detallesProducto!: Producto;
  total!: number;
  detallesVenta!: Venta;
}
