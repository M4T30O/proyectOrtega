import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/productos';
import { Productos } from '../paginas/productos/productos';
@Injectable({
  providedIn: 'root',
})
export class Carrito {

  // Signal: lista reactiva de productos
  // Al cambiar → todos los componentes se actualizan
  carrito: Producto[] = [];
  

}
