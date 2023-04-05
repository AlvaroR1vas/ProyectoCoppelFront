import { Component } from '@angular/core';
import { Inventario } from '../inventario';
import { InventarioService } from '../inventario.service';
import Swal from 'sweetalert2';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventario-actualizacion',
  templateUrl: './inventario-actualizacion.component.html',
  styleUrls: ['./inventario-actualizacion.component.css']
})
export class InventarioActualizacionComponent {
  id:number
  inventario:Inventario
  Inventario:Inventario[]
  
  constructor(private InventarioService:InventarioService,private route:ActivatedRoute,private router:Router) { 
    //Lo que se hace es que se crea un objeto de tipo Inventario y se le asigna el valor que se obtiene del servicio
    this.inventario = new Inventario();
    this.id = this.route.snapshot.params['id'];
    this.InventarioService.obtenerInventarioId(this.id).subscribe(data => {
      this.inventario = data;
    });
  }


  ngOninit():void {       
  }
  
  ActualizarInventario(): void {
    if (this.inventario.nombre === undefined || this.inventario.nombre === null || this.inventario.nombre === '') {
      Swal.fire('El nombre es obligatorio');
      return;
    } else if (this.inventario.cantidad === undefined || this.inventario.cantidad === null || this.inventario.cantidad === 0 ) {
      Swal.fire('La cantidad es obligatorio');
      return;
    } 
    this.InventarioService.ActualizaInventario(this.inventario).subscribe(data => {
      Swal.fire('Producto Actualizado', `Producto ${this.inventario.nombre} con cantidad de ${this.inventario.cantidad} Registrado con éxito!`, 'success');
      this.router.navigate(['/inventario']);    
    });
  }  
}
