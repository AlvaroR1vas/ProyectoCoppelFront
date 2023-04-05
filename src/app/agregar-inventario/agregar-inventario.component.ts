import { Component } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { Router } from '@angular/router';
import { Inventario } from '../inventario';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.css']
})
export class AgregarInventarioComponent {
  inventario: Inventario = new Inventario();
  constructor(private InventarioService:InventarioService,private router:Router) { }
  ngOninit(): void {

  }
  guardarInventario(): void {
    if (this.inventario.nombre === undefined || this.inventario.nombre === null || this.inventario.nombre === '') {
      Swal.fire('El nombre es obligatorio');
      return;
    } else if (this.inventario.cantidad === undefined || this.inventario.cantidad === null || this.inventario.cantidad === 0 ) {
      Swal.fire('La cantidad es obligatorio');
      return;
    } 
    this.InventarioService.RegistrarInventario(this.inventario).subscribe(data => {
      Swal.fire('Nuevo Producto', `Producto ${this.inventario.nombre} ${this.inventario.cantidad} Registrado con éxito!`, 'success');
      this.router.navigate(['/inventario']);    
    });
  }    

}
