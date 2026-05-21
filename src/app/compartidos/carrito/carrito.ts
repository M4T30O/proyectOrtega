import { Component, inject } from '@angular/core';
import { CarritoServicio } from '../../servicios/carrito-servicio';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  svc = inject(CarritoServicio)
}
