import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteAgregarComponent } from './cliente/cliente-agregar/cliente-agregar.component';
import { ClienteModificarComponent } from './cliente/cliente-modificar/cliente-modificar.component';
import { ProductoAgregarComponent } from './producto/producto-agregar/producto-agregar.component';
import { ProductoModificarComponent } from './producto/producto-modificar/producto-modificar.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ServiceclienteService} from "./service/servicecliente.service";
import {ServiceproductoService} from "./service/serviceproducto.service";
import { VentaComponent } from './venta/venta.component';
import { VentaAgregarComponent } from './venta/venta-agregar/venta-agregar.component';
import {ServiceventaService} from "./service/serviceventa.service";
import { ReporteresumidoComponent } from './reporteresumido/reporteresumido.component';
import { ReportedetalladoComponent } from './reportedetallado/reportedetallado.component';
import { DetallesComponent } from './reporteresumido/detalles/detalles.component';
import { ReporteventaComponent } from './reporteventa/reporteventa.component';
import { DetalleAgregarComponent } from './venta/detalle-agregar/detalle-agregar.component';
import {ServicedetalleService} from "./service/servicedetalle.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ClienteComponent,
    ClienteAgregarComponent,
    ClienteModificarComponent,
    ProductoAgregarComponent,
    ProductoModificarComponent,
    VentaComponent,
    VentaAgregarComponent,
    ReporteresumidoComponent,
    ReportedetalladoComponent,
    DetallesComponent,
    ReporteventaComponent,
    DetalleAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiceclienteService,
    ServiceproductoService,
    ServiceventaService,
    ServicedetalleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
