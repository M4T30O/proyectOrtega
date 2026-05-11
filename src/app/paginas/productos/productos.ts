import { Component } from '@angular/core';
import { Producto } from '../../models/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  Productos : Producto [] = [
    {
      id: 1,
      nombre: "El viejo y el mar",
      escritor: "Ernest Hemingway",
      descripcion: "Narra la historia de un pescador cubano, que enfrenta a un gigantesco marlin",
      precio: 2000,
      stock: 5,
      img: "assets/el_viejo_y_el_mar.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 2,
      nombre: "El retrato de Dorian Grey",
      escritor: "Oscar Wilde",
      descripcion: "Narra la historia de un joven que desea que su retrato envejezca y corrompa en su lugar, mientras el no sufre ningun cambio",
      precio: 1500,
      stock: 20,
      img: "assets/el_retrato_de_Dorian_Gray.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 3,
      nombre: "El gran Gatsby",
      escritor: "F. Scott Fitzgerald",
      descripcion: "Un millonario llamado Jay Gatsby esta obsesionado poor revivir un amor pasado con Daisy Buchanan, todo narrado desde la perspectiva de su vecino Nick Carraway",
      precio: 1500,
      stock: 10,
      img: "assets/el_gran_Gatsby.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 4,
      nombre: "El faro del fin del mundo",
      escritor: "Julio Verne",
      descripcion: "Narra la historia de tres fareros en una isla hinospita al sur de Argentina, cuya vida se ve amenazada por un grupo de piratas.",
      precio: 2500,
      stock: 15,
      img: "assets/el_faro_del_fin_del_mundo.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 5,
      nombre: "Cronica de una muerte anunciada",
      escritor: "Gabriel Garcia Marquez",
      descripcion: "Narra el asesinato de Santiago Nasar a manos de los hermanos Vicario para vengar el honor de su hermana Angela.",
      precio: 2500,
      stock: 10,
      img: "assets/cronica_de_una_muerte_anunciada.jpg",
      genero: "",
      disponibilidad: true
    },
    {
      id: 6,
      nombre: "Normal people",
      escritor: "Sally Rooney",
      descripcion: "Narra la relacion entre Marianne Sherida y Conell Waldron, dos jovenes de mundos sociales muy diferentes en un pueblo de Irlanda",
      precio: 2500,
      stock: 25,
      img: "assets/normal_people.jpg",
      genero: "",
      disponibilidad: true
    }


    
  ]
  
   verInformacion(nombre: String, escritor: string, genero: string, descripcion: string) {
    alert(`${nombre} \nEscritor: ${escritor}, \ngenero: ${genero} \nDescripcion: ${descripcion}`)
  }


}
