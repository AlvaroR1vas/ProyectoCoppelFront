import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poliza } from './poliza';
import { Empleado } from './empleado';
import { Inventario } from './inventario';
@Injectable({
  providedIn: 'root'
})
export class PolizaService {

   //Url de la API REST DE TODOS LOS EMPLEADOS
   private baseUrl = 'http://localhost:8080/api/v1/Poliza';
   private baseUrlRegistro = 'http://localhost:8080/api/v1/RegistroPoliza';

  
   private baseUrl2 = 'http://localhost:8080/api/v1/RegistroInventario';
   private baseUrlEmpleado = 'http://localhost:8080/api/v1/Empleados';
   private baseUrlEmpleadoid = 'http://localhost:8080/api/v1/Empleado';
   private baseUrlInventario = 'http://localhost:8080/api/v1/Inventario';
 
   constructor(private HttpClient:HttpClient) { }
   obtenerPoliza():Observable<Poliza[]>{
     return this.HttpClient.get<Poliza[]>(`${this.baseUrl}`);
   }

  obtenerPolizaID(id:number):Observable<Poliza>{
    return this.HttpClient.get<Poliza>(`${this.baseUrl}/${id}`);
  }

   
  /* RegistrarInventario(inventario:Poliza):Observable<Object>{
     return this.HttpClient.post(`${this.baseUrl2}`,inventario);
   }*/
   obtenerEmpleados():Observable<Empleado[]>{
    return this.HttpClient.get<Empleado[]>(`${this.baseUrlEmpleado}`);
  }
  obtenerInventario():Observable<Inventario[]>{
    return this.HttpClient.get<Inventario[]>(`${this.baseUrlInventario}`);
  }

  RegistrarPoliza(poliza:Poliza):Observable<Object>{
    return this.HttpClient.post(`${this.baseUrlRegistro}`,poliza);
  }
  obtenerInventarioId(id:number):Observable<Inventario>{
    return this.HttpClient.get<Inventario>(`${this.baseUrlInventario}/${id}`);
  }
  ActualizaCantidadesInventarioId(inventario:Inventario):Observable<Object>{
    return this.HttpClient.put(`${this.baseUrlInventario}/${inventario.sku}`,inventario);
  }
 
  eliminarPoliza(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseUrl}/${id}`);
  }
  obtenerEmpleado(id:number):Observable<Empleado>{
    console.log("id"+id);
    return this.HttpClient.get<Empleado>(`${this.baseUrlEmpleadoid}/${id}`);
  }

  ActualizaPoliza(poliza:Poliza):Observable<Object>{
    console.log('polizaa' +poliza.sku);
    return this.HttpClient.put(`${this.baseUrl}/${poliza.idpoliza}`,poliza);

  }
}
