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


  //DELETE
  eliminar(id: number) {
    this.favoritoserv.eliminarLibro(id)
    this.productosFavoritos = this.favoritoserv.obtenerLibros()
  }


  agregarCarrito(p: Producto) {
    this.CarritoService.agregarLibro(p);

  }


}

