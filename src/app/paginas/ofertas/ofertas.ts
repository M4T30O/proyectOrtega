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
export class Ofertas implements OnInit {

  constructor(
    private CarritoService: CarritoServicio,
    private favoritosService: FavoritoServicio
  ) { }

  // Array donde se guardarán los productos filtrados
  productosOferta: Producto[] = [];

  // Lista base idéntica a la que tenés en productos.ts
  allProductos: Producto[] = [
    { id: 1, nombre: "El viejo y el mar", escritor: "Ernest Hemingway", descripcion: "Narra la historia de un pescador cubano, que enfrenta a un gigantesco marlin", precio: 2000, stock: 5, img: "assets/el_viejo_y_el_mar.jpg", genero: "Suspenso", disponibilidad: true, cant: 1, favorito: true },
    { id: 2, nombre: "El retrato de Dorian Grey", escritor: "Oscar Wilde", descripcion: "Narra la historia de un joven que desea que su retrato envejezca y corrompa en su lugar, mientras el no sufre ningun cambio", precio: 1500, stock: 20, img: "assets/el_retrato_de_Dorian_Gray.jpg", genero: "Drama", disponibilidad: true, cant: 1, favorito: true },
    { id: 3, nombre: "El gran Gatsby", escritor: "F. Scott Fitzgerald", descripcion: "Un millonario llamado Jay Gatsby esta obsesionado poor revivir un amor pasado con Daisy Buchanan, todo narrado desde la perspectiva de su vecino Nick Carraway", precio: 1500, stock: 10, img: "assets/el_gran_Gatsby.jpg", genero: "Tragedia", disponibilidad: true, cant: 1, favorito: true },
    { id: 4, nombre: "El faro del fin del mundo", escritor: "Julio Verne", descripcion: "Narra la historia de tres fareros en una isla hinospita al sur de Argentina, cuya vida se ve amenazada por un grupo de piratas.", precio: 2500, stock: 15, img: "assets/el_faro_del_fin_del_mundo.jpg", genero: "Aventura", disponibilidad: true, cant: 1, favorito: true },
    { id: 5, nombre: "Cronica de una muerte anunciada", escritor: "Gabriel Garcia Marquez", descripcion: "Narra el asesinato de Santiago Nasar a manos de los hermanos Vicario para vengar el honor de su hermana Angela.", precio: 2500, stock: 10, img: "assets/cronica_de_una_muerte_anunciada.jpg", genero: "Policiaca", disponibilidad: true, cant: 1, favorito: true },
    { id: 6, nombre: "Normal people", escritor: "Sally Rooney", descripcion: "Narra la relacion entre Marianne Sherida y Conell Waldron, dos jovenes de mundos sociales muy diferentes en un pueblo de Irlanda", precio: 2500, stock: 25, img: "assets/normal_people.jpg", genero: "Drama", disponibilidad: true, cant: 1, favorito: true },
    { id: 7, nombre: "Arsenio Lupin, caballero ladrón", escritor: "Maurice Leblanc", descripcion: "Arsenio Lupin, un brillante ladrón de guante blanco, maestro del disfraz y experto en artes marciales...", precio: 2500, stock: 90, img: "assets/Lupin.jpg", genero: "Misterio, policiaca", disponibilidad: true, cant: 1, favorito: true },
    { id: 8, nombre: "Mi planta de naranja lima", escritor: "José Mauro de Vasconcelos", descripcion: "José Mauro de Vasconcelos recreó sus recuerdos de infancia...", precio: 5000, stock: 25, img: "assets/mi_planta_de_naranja_lima.jpg", genero: "Drama", disponibilidad: true, cant: 1, favorito: true },
    { id: 9, nombre: "El hombre invisible", escritor: " H. G. Wells", descripcion: "narra la historia de un joven y ambicioso científico...", precio: 5000, stock: 30, img: "assets/el_hombre_invisible.jpg", genero: "Suspenso", disponibilidad: true, cant: 1, favorito: true }
  ];

  ngOnInit() {
    // Filtramos los libros menores a $2500
    this.productosOferta = this.allProductos.filter(p => p.precio < 3000);
  }

  agregarCarrito(p: Producto) {
    this.CarritoService.agregarLibro(p);
  }

  agregarFavorito(p: Producto) {
    this.favoritosService.agregarLibro(p);
    p.favorito = false;
  }

  eliminarFavorito(p: Producto) {
    this.favoritosService.eliminarLibro(p.id);
    p.favorito = true;
  }

  verInformacion(nombre: string, escritor: string, genero: string, descripcion: string) {
    alert(`Titulo: ${nombre} \nEscritor: ${escritor}, \nGénero: ${genero} \nDescripción: ${descripcion}`);
  }
}