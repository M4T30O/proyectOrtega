import { Injectable } from '@angular/core';
import { Productos } from '../paginas/productos/productos';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoServicio {
  carritoArray: Producto[] = [];

  //Agregar carrito
  agregarLibro(p: Producto) {
    this.carritoArray.push(p);
  }

  // READ
  obtenerLibros() {
    return this.carritoArray;
  }

  //Aumentar cantidad
  aumentarLecturas(id: number) {
    const libro =
      this.carritoArray.find(p => p.id === id);
    if (libro) {
      libro.cant++;
    }
  }

  //Disminuir cantidad
  disminuirLecturas(id: number) {
    const libro =
      this.carritoArray.find(p => p.id === id);
    if (libro && libro.cant > 1) {
      libro.cant--;
    }
  }


  //Eliminar
  eliminarLibro(id: number) {
    this.carritoArray =
      this.carritoArray.filter(p => p.id !== id);
  }

}
