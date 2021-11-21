import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteComponent} from "./cliente/cliente.component";
import {ProductoComponent} from "./producto/producto.component";
import {ProductoModificarComponent} from "./producto/producto-modificar/producto-modificar.component";
import {ClienteAgregarComponent} from "./cliente/cliente-agregar/cliente-agregar.component";
import {ProductoAgregarComponent} from "./producto/producto-agregar/producto-agregar.component";
import {ClienteModificarComponent} from "./cliente/cliente-modificar/cliente-modificar.component";
import {VentaComponent} from "./venta/venta.component";
import {VentaAgregarComponent} from "./venta/venta-agregar/venta-agregar.component";
import {ReporteresumidoComponent} from "./reporteresumido/reporteresumido.component";
import {ReportedetalladoComponent} from "./reportedetallado/reportedetallado.component";
import {DetallesComponent} from "./reporteresumido/detalles/detalles.component";
import {ReporteventaComponent} from "./reporteventa/reporteventa.component";
import {DetalleAgregarComponent} from "./venta/detalle-agregar/detalle-agregar.component";

const routes: Routes = [
  {
    path:'producto',
    component:ProductoComponent
  },
  {
    path:'nuevoproducto',
    component:ProductoAgregarComponent
  },
  {
    path:'modificarproducto/:id',
    component:ProductoModificarComponent
  },
  {
    path:'cliente',
    component:ClienteComponent
  },
  {
    path:'nuevocliente',
    component:ClienteAgregarComponent
  },
  {
    path:'modificarcliente/:id',
    component:ClienteModificarComponent
  },
  {
    path:'ventas',
    component:VentaComponent
  },
  {
    path:'nuevaventa',
    component:VentaAgregarComponent
  },
  {
    path:'nuevaventa/:id',
    component:DetalleAgregarComponent
  },
  {
    path:'resumido',
    component:ReporteresumidoComponent
  },
  {
    path:'detalles/:id',
    component:DetallesComponent
  },
  {
    path:'detallado',
    component:ReportedetalladoComponent
  },
  {
    path:'reporte',
    component:ReporteventaComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
