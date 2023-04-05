import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ HttpClientModule } from '@angular/common/http';
import { RegistrarempleadoComponent } from './registrarempleado/registrarempleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';
import { AgregarInventarioComponent } from './agregar-inventario/agregar-inventario.component';
import { PolizaRegistroComponent } from './poliza-registro/poliza-registro.component';
import { PolizaActualizacionComponent } from './poliza-actualizacion/poliza-actualizacion.component';
import { PolizaEliminacionComponent } from './poliza-eliminacion/poliza-eliminacion.component';
import { PolizaListadoComponent } from './poliza-listado/poliza-listado.component';
import { InventarioActualizacionComponent } from './inventario-actualizacion/inventario-actualizacion.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    NavbarComponent,
    RegistrarempleadoComponent,
    ActualizarEmpleadoComponent,
    ListarInventarioComponent,
    AgregarInventarioComponent,
    PolizaRegistroComponent,
    PolizaActualizacionComponent,
    PolizaEliminacionComponent,
    PolizaListadoComponent,
    InventarioActualizacionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
