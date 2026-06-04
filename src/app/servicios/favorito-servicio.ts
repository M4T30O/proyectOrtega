import { Injectable } from '@angular/core';
import { Productos } from '../paginas/productos/productos';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class FavoritoServicio { 
  favoritosArray: Producto[] = [];

  
  //Agregar carrito
  agregarLibro(p: Producto) {
    this.favoritosArray.push(p);
    alert("Se ha agregado a favoritos")
  }

  // READ
  obtenerLibros() {
    return this.favoritosArray;
  }

  //Aumentar cantidad
  aumentarLecturas(id: number) {
    const libro =
      this.favoritosArray.find(p => p.id === id);
    if (libro) {
      libro.cant++;
    }
  }

  //Disminuir cantidad
  disminuirLecturas(id: number) {
    const libro =
      this.favoritosArray.find(p => p.id === id);
    if (libro && libro.cant > 1) {
      libro.cant--;
    }
  }


  //Eliminar
  eliminarLibro(id: number) {
    this.favoritosArray =
      this.favoritosArray.filter(p => p.id !== id);
  }
}
