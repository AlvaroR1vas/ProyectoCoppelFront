import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarempleadoComponent } from './registrarempleado/registrarempleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';
import { AgregarInventarioComponent } from './agregar-inventario/agregar-inventario.component';
import { PolizaListadoComponent } from './poliza-listado/poliza-listado.component';
import { PolizaRegistroComponent } from './poliza-registro/poliza-registro.component';
import { PolizaActualizacionComponent } from './poliza-actualizacion/poliza-actualizacion.component';
import { InventarioActualizacionComponent } from './inventario-actualizacion/inventario-actualizacion.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent }, 
  { path: 'registrar-empleado', component: RegistrarempleadoComponent }, 
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent }, 
  { path: 'inventario', component: ListarInventarioComponent},
  { path: 'agregar-inventario', component: AgregarInventarioComponent},
  { path: 'poliza', component: PolizaListadoComponent},
  { path: 'agregar-poliza', component: PolizaRegistroComponent},
  {  path: 'actualizar-poliza/:id', component: PolizaActualizacionComponent },
  {  path: 'actualizar-inventario/:id', component: InventarioActualizacionComponent},
  { path: '', redirectTo: 'poliza', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
