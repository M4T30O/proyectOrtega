import { Injectable } from '@angular/core';
import { Productos } from '../paginas/productos/productos';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoServicio {
  carritoArray: Producto[] = [];

  //Create
  agregarLibro(p: Producto) {
    const Libroexiste = this.carritoArray.find(d => d.id === p.id)
    if (Libroexiste) {
      alert("El libro ya se esta en el carrito")
    } else {
      this.carritoArray.push(p);
      alert(`Se ha agregado al carrito`)


    }

  }

  // READ
  obtenerLibros() {
    return this.carritoArray;
  }

  //Update
  aumentarLecturas(id: number) {
    const libro =
      this.carritoArray.find(p => p.id === id);
    if (libro) {
      libro.cant++;
    }
  }

  //Update
  disminuirLecturas(id: number) {
    const libro =
      this.carritoArray.find(p => p.id === id);
    if (libro && libro.cant > 1) {
      libro.cant--;
    }
  }


  //Delete
  eliminarLibro(id: number) {
    this.carritoArray =
      this.carritoArray.filter(p => p.id !== id);
  }

  vaciarCarrito() {
    this.carritoArray = []
  }
}
