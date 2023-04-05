import { Component,OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../empleados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarempleado',
  templateUrl: './registrarempleado.component.html',
  styleUrls: ['./registrarempleado.component.css']
})
export class RegistrarempleadoComponent {
  empleado: Empleado = new Empleado();
  constructor(private EmpleadosService:EmpleadosService,private router:Router) { }
  ngOninit(): void {

  }
  guardarEmpleado(): void {
    if (this.empleado.nombre === undefined || this.empleado.nombre === null || this.empleado.nombre === '') {
      Swal.fire('El nombre es obligatorio');
      return;
    } else if (this.empleado.apellido === undefined || this.empleado.apellido === null || this.empleado.apellido === '') {
      Swal.fire('El apellido es obligatorio');
      return;
    } else if (this.empleado.puesto === undefined || this.empleado.puesto === null || this.empleado.puesto === '') {
      Swal.fire('El puesto es obligatorio');  
      return; 
    }
    this.EmpleadosService.registrarempleado(this.empleado).subscribe(data => {
      Swal.fire('Nuevo empleado', `Empleado ${this.empleado.nombre} ${this.empleado.apellido} creado con éxito!`, 'success');
      this.router.navigate(['/empleados']);    
    });
  }    
}
