import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  //Url de la API REST DE TODOS LOS EMPLEADOS
  private baseUrl = 'http://localhost:8080/api/v1/Empleados';
  private baseUrl2 = 'http://localhost:8080/api/v1/RegistroEmpleado';
  private baseUrl3 = 'http://localhost:8080/api/v1/Empleado';


  constructor(private HttpClient:HttpClient) { }
  obtenerEmpleados():Observable<Empleado[]>{
    return this.HttpClient.get<Empleado[]>(`${this.baseUrl}`);
  }
 
  registrarempleado(empleado:Empleado):Observable<Object>{
    return this.HttpClient.post(`${this.baseUrl2}`,empleado);
  }
  eliminarEmpleado(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseUrl3}/${id}`);
  }
  
  obtenerEmpleado(id:number):Observable<Empleado>{
    console.log("id"+id);
    return this.HttpClient.get<Empleado>(`${this.baseUrl3}/${id}`);
  }
  actualizarEmpleado(empleado:Empleado):Observable<Object>{
    return this.HttpClient.put(`${this.baseUrl3}/${empleado.idempleado}`,empleado);

  }
}
