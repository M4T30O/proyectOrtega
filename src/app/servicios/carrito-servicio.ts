import { Injectable } from '@angular/core';
import { Productos } from '../paginas/productos/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoServicio {
  carritoArray = (p : Productos) => [] = [];
}
