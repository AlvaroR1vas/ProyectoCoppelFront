import { Component } from '@angular/core';
import { Poliza } from '../poliza';
import { PolizaService } from '../poliza.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { PolizaCompleta } from '../poliza-completa';
import swal from 'sweetalert2';

@Component({
  selector: 'app-poliza-listado',
  templateUrl: './poliza-listado.component.html',
  styleUrls: ['./poliza-listado.component.css']
})
export class PolizaListadoComponent {
  Poliza: Poliza[];
  Empleado: Empleado[];
  PolizaconEmpleado: PolizaCompleta[];

  constructor(private PolizaService:PolizaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit():void {
    this.obtenerPolizas()
    //this.obtenerEmpleado()
  }

  private obtenerPolizas(){
    this.PolizaService.obtenerPoliza().subscribe(data => {      
      this.Poliza = data;
      
      for (let i = 0; i < this.Poliza.length; i++) {
        this.PolizaService.obtenerEmpleados().subscribe(data =>  {
            console.log(data.find(x => x.idempleado == Number(this.Poliza[i].empleadogenero)));    
            
        });
      }   
    });
  }  
  eliminarPoliza(idpoliza:number,poliza:Poliza){  
    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar al empleado ${poliza.idpoliza}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.PolizaService.eliminarPoliza(poliza.idpoliza).subscribe(data => {
          console.log(data);
          this.Poliza = this.Poliza.filter(e => e !== poliza);
          swal.fire(
            'Empleado eliminado!',
            `Poliza ${poliza.idpoliza} eliminado con éxito.`,
            'success'
          )
          /*this.PolizaService.ActualizaCantidadesInventarioId(poliza.sku).subscribe(data=>{
            console.log(data);
          }) */
          this.PolizaService.obtenerInventarioId(poliza.sku).subscribe(data2 => { 
            console.log(data);
            data2.cantidad=data2.cantidad+poliza.cantidad;
            // Validamos que la cantidad del producto en el inventario sea mayor o igual a la cantidad de la poliza                                
              this.PolizaService.ActualizaCantidadesInventarioId(data2).subscribe(data3 => {
                console.log(data3);
              });      
              this.router.navigate(["poliza"]);       
          });          
        })    
      }      
    })
  } 
}
