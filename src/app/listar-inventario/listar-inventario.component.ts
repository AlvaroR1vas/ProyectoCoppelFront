import { Component ,OnInit} from '@angular/core';
import swal from 'sweetalert2';
import { Inventario } from '../inventario';
import { InventarioService } from '../inventario.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent {
  Productos: Inventario[];
  constructor(private InventarioService:InventarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit():void {
    this.obtenerInventario()
  }

  private obtenerInventario(){
    this.InventarioService.obtenerInventario().subscribe(data => {
      this.Productos = data;
    });
  } 

  EliminarInventario(sku:number,inventarios:Inventario){  
    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar al empleado ${sku}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.InventarioService.EliminarInventarioID(sku).subscribe(data => {
          console.log(data);
          this.Productos = this.Productos.filter(e => e !== inventarios);         
          swal.fire(
            'Producto eliminado!',
            `Producto ${sku} eliminado con éxito.`,
            'success'
          )          
        })    
      }      
    })           
  } 
}

