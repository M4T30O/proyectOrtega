import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/productos';
import { CommonModule } from '@angular/common';
import { CarritoServicio } from '../../servicios/carrito-servicio';
import { FavoritoServicio } from '../../servicios/favorito-servicio';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {

}