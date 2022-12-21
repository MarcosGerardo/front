import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core'; 
import { ProductosDTO } from './ProductosDTO'; 

@Component({ 
  selector: 'app-contenidosproductos', 
  templateUrl: './contenidosproductos.component.html', 
  styleUrls: ['./contenidosproductos.component.css'] 
}) 
export class ContenidosproductosComponent implements OnInit { 
 
  productos: ProductosDTO[] = []; 
  constructor(private http : HttpClient) {  
    this.http.get<ProductosDTO[]>("http://localhost/back/getproductos.php") 
    .subscribe(resultado => { 
      this.productos = resultado; 
      
    }); 

 
  } 
 
  ngOnInit(): void { 
  } 
 
}