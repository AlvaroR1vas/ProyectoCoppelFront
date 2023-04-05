import { Component ,OnInit} from '@angular/core';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  id:number;
  empleados: Empleado[];
  empleado: Empleado = new Empleado();

  constructor(private EmpleadosService:EmpleadosService,private router:Router,private route:ActivatedRoute) { 

  }

  ngOnInit():void {
    this.obtenerEmpleados()
  }
  private obtenerEmpleados(){
    this.EmpleadosService.obtenerEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }  

   eliminarEmpleado(idempleado:number,empleado:Empleado){  
    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar al empleado ${empleado.nombre} ${empleado.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.EmpleadosService.eliminarEmpleado(empleado.idempleado).subscribe(data => {
          this.empleados = this.empleados.filter(e => e !== empleado);
          swal.fire(
            'Empleado eliminado!',
            `Empleado ${empleado.nombre} eliminado con éxito.`,
            'success'
          )                
        })
      }
    })
  } 
}