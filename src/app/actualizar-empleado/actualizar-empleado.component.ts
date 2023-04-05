import { Component,OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';
import Swal from 'sweetalert2';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent {
  id:number;
  empleado:Empleado


  constructor(private EmpleadosService:EmpleadosService,private router:Router,private route:ActivatedRoute) { 
  
  }
  
  ngOnInit():void { 
    this.empleado = new Empleado();
    this.id = this.route.snapshot.params['id'];
    this.EmpleadosService.obtenerEmpleado(this.id).subscribe(data => {
      this.empleado = data;
    }); 
  }
 
  Actualiza(): void{  
    this.EmpleadosService.actualizarEmpleado(this.empleado).subscribe(data => {
      Swal.fire('Empleado Actualizado', `Empleado ${this.empleado.nombre} ha sido actualizado con éxito!`, 'success');
      this.router.navigate(['/empleados']);    
    });
  }
}
