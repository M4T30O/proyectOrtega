import { Component, inject, OnInit } from '@angular/core';
import { CarritoServicio } from '../../servicios/carrito-servicio';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  productosEnCarrito: Producto[] = [];

  constructor(
    private Carritoserv: CarritoServicio
  ) {}

  ngOnInit() {
    this.productosEnCarrito = this.Carritoserv.obtenerLibros();
  }

  aumentar(id: number) {
    this.Carritoserv.aumentarLecturas(id)
  }

  disminuir(id: number) {
    this.Carritoserv.disminuirLecturas(id)
  }

  eliminarTodo() {
    this.Carritoserv.vaciarCarrito()
  }

  comprar() {
    alert(`Se ha realizado la compra`)
  }

  


  svc = inject(CarritoServicio)


}
