import {  Component } from '@angular/core';
import { Poliza } from '../poliza';
import { PolizaService } from '../poliza.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { Inventario } from '../inventario';
import Swal from 'sweetalert2';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-poliza-actualizacion',
  templateUrl: './poliza-actualizacion.component.html',
  styleUrls: ['./poliza-actualizacion.component.css']
})
export class PolizaActualizacionComponent {
  Poliza: Poliza[];
  Empleado: Empleado[];
  Inventario: Inventario[];
  poliza = new Poliza();
  idempleado: number = 0;
  sku: number = 0;
  id:number;
  polizarecibe:Poliza;
  productorecibe:Inventario;
  empleadorecibe:Empleado;

  constructor(private PolizaService:PolizaService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit():void {
    this.polizarecibe = new Poliza();
    this.id = this.route.snapshot.params['id'];
    this.PolizaService.obtenerPolizaID(this.id).subscribe(data =>{
      this.polizarecibe = data;      
      this.PolizaService.obtenerInventarioId(this.polizarecibe.sku).subscribe(data => { 
        this.productorecibe=data;
        this.PolizaService.obtenerEmpleado(Number(this.polizarecibe.empleadogenero)).subscribe(data => { 
          this.empleadorecibe=data;
        }); 
      });             
    });                 
    this.obtenerInventario();
    this.obtnerEmpleados();
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

  ActualizaPoliza(): void {
    // Buscamos la cantidad del producto en el inventario
    //validamos si la actualizacion es en los producotos en caso de ser asi se suman la cantidad del producto a la tabla de inventario 
    if(this.polizarecibe.sku!=this.sku){      
      this.PolizaService.obtenerInventarioId(this.polizarecibe.sku).subscribe(inventario => {
        inventario.cantidad=inventario.cantidad+this.polizarecibe.cantidad;
        this.PolizaService.ActualizaCantidadesInventarioId(inventario).subscribe(inventarioactualiza => {
          console.log(inventarioactualiza);          
        });
      });
    }

    this.PolizaService.obtenerInventarioId(this.sku).subscribe(data => { 
    //En caso que no haya cambios en el producto se valida que la cantitad que tuviera la poliza + lo  que tenga en stock
    if(this.polizarecibe.sku==this.sku){
      data.cantidad=data.cantidad+this.polizarecibe.cantidad;
    }

      // Validamos que la cantidad del producto en el inventario sea mayor o igual a la cantidad de la poliza
    if(  data.cantidad < this.poliza.cantidad){
      Swal.fire("No hay suficiente cantidad",'Favor de revisar la cantidad ingresada','info');
      return;
    }
    this.poliza.empleadogenero=String(this.idempleado);
    this.poliza.sku=Number(this.sku);
    this.poliza.idpoliza=this.polizarecibe.idpoliza;        
    this.poliza.fecha= String(DateTime.now());
        console.log(this.poliza.empleadogenero);
        console.log( this.poliza.sku);
        console.log( this.poliza.idpoliza);
    this.PolizaService.ActualizaPoliza(this.poliza).subscribe(data2 => {         
      Swal.fire('Poliza Actulizada Correctamente','','success');          
      data.cantidad = data.cantidad - this.poliza.cantidad;
      this.PolizaService.ActualizaCantidadesInventarioId(data).subscribe(data3 => {            
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
     /* if (this.sku===this.polizarecibe.sku){
        console.log("son iguales")
      }*/
      console.log('seleccionado'+this.sku)
      console.log('inicial'+this.polizarecibe.sku)

  }
  
}
