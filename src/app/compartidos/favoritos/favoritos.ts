import { Component, OnInit } from '@angular/core';
import { FavoritoServicio } from '../../servicios/favorito-servicio';
import { CarritoServicio } from '../../servicios/carrito-servicio';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  productosFavoritos: Producto[] = []


  constructor(
    private favoritoserv: FavoritoServicio,
    private CarritoService: CarritoServicio,

  ) { }


  ngOnInit() {
    this.productosFavoritos = this.favoritoserv.obtenerLibros();
  }

  aumentar(id: number) {
    this.favoritoserv.aumentarLecturas(id)
  }

  disminuir(id: number) {
    this.favoritoserv.disminuirLecturas(id)
  }

  eliminarTodo(id: number) {
    this.favoritoserv.eliminarLibro(id)
  }


  agregarCarrito(p: Producto, nombre: string) {
    this.CarritoService.agregarLibro(p);

    alert(`Se ha agregado el producto ${nombre}`)
  }


}
