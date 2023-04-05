import {  Component } from '@angular/core';
import { Poliza } from '../poliza';
import { PolizaService } from '../poliza.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { Inventario } from '../inventario';
import Swal from 'sweetalert2';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-poliza-registro',
  templateUrl: './poliza-registro.component.html',
  styleUrls: ['./poliza-registro.component.css']
})
export class PolizaRegistroComponent {
  Poliza: Poliza[];
  Empleado: Empleado[];
  Inventario: Inventario[];
  poliza = new Poliza();
  idempleado: number = 0;
  sku: number = 0;

  constructor(private PolizaService:PolizaService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit():void {
    this.obtnerEmpleados()
    this.obtenerInventario()
    //this.obtenerEmpleado()
  }

  private obtenerPolizas(){   
    this.PolizaService.obtenerPoliza().subscribe(data => {      
      this.Poliza = data;             
    });
  }
  private obtnerEmpleados(){   
    this.PolizaService.obtenerEmpleados().subscribe(data => {      
      this.Empleado = data;             
    });
  }

  private obtenerInventario(){   
    this.PolizaService.obtenerInventario().subscribe(data => {      
      this.Inventario = data;             
    });
  }

  GuardaPoliza(): void {0    
    this.poliza.fecha= String(DateTime.now());
    
    // Buscamos lacantidad del producto en el inventario
    this.PolizaService.obtenerInventarioId(this.sku).subscribe(data => { 
      // Validamos que la cantidad del producto en el inventario sea mayor o igual a la cantidad de la poliza
      if(  data.cantidad < this.poliza.cantidad){
        Swal.fire("No hay suficiente cantidad",'Favor de revisar la cantidad ingresada','info');
        return;
      }
      console.log(this.poliza.fecha);
      this.poliza.empleadogenero=String(this.idempleado);
      this.poliza.sku=Number(this.sku);
      this.PolizaService.RegistrarPoliza(this.poliza).subscribe(data2 => {
        Swal.fire('Poliza Generada Correctamente','','success');
        data.cantidad = data.cantidad - this.poliza.cantidad;
        this.PolizaService.ActualizaCantidadesInventarioId(data).subscribe(data3 => {
          console.log(data3);
        });

        this.router.navigate(["poliza"]);
      })
    });
   
  }

  onEmpleado(e:any) {
    // Pasamos el valor seleccionado a la variable idempleado  
    console.log(e.target.value);
    this.idempleado   = e.target.value;
  }
  onProducto  (e:any) {  
      // Pasamos el valor seleccionado a la variable sku  
      console.log(e.target.value);
      this.sku = e.target.value;
  }
}
