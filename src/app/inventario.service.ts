import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Inventario } from './inventario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  //Url de la API REST DE TODOS LOS EMPLEADOS
  private baseUrl = 'http://localhost:8080/api/v1/Inventario';
  private baseUrl2 = 'http://localhost:8080/api/v1/RegistroInventario';
  constructor(private HttpClient:HttpClient) { }
  obtenerInventario():Observable<Inventario[]>{
    return this.HttpClient.get<Inventario[]>(`${this.baseUrl}`);
  }
  RegistrarInventario(inventario:Inventario):Observable<Object>{
    return this.HttpClient.post(`${this.baseUrl2}`,inventario);
  }
  EliminarInventarioID(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseUrl}/${id}`);
  }
  obtenerInventarioId(id:number):Observable<Inventario>{
    console.log(id);
    return this.HttpClient.get<Inventario>(`${this.baseUrl}/${id}`);
  }
  ActualizaInventario(inventario:Inventario):Observable<Object>{
    console.log('SKU' +inventario.sku);
    return this.HttpClient.put(`${this.baseUrl}/${inventario.sku}`,inventario);

  }
}
