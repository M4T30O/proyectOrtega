import { Component } from '@angular/core';
import { Productos } from '../../../models/productos';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {

  Productos : Productos [] = [
    {
      id: 1,
      nombre: "El viejo y el mar",
      escritor: "Ernest Hemingway",
      descripcion: "",
      precio: 2000,
      stock: 5,
      img: "/el_viejo_y_el_mar.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 2,
      nombre: "El retrato de Dorian Grey",
      escritor: "Oscar Wilde",
      descripcion: "",
      precio: 1500,
      stock: 20,
      img: "/el_retrato_de_Dorian_Gray.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 3,
      nombre: "El gran Gatsby",
      escritor: "F. Scott Fitzgerald",
      descripcion: "",
      precio: 1500,
      stock: 10,
      img: "/el_gran_Gatsby.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 4,
      nombre: "El faro del fin del mundo",
      escritor: "Julio Verne",
      descripcion: "",
      precio: 2500,
      stock: 15,
      img: "/el_faro_del_fin_del_mundo.jpg",
      genero: "",
      disponibilidad: true,
    },
    {
      id: 5,
      nombre: "Cronica de una muerte anunciada",
      escritor: "Gabriel Garcia Marquez",
      descripcion: "",
      precio: 2500,
      stock: 10,
      img: "/cronica_de_una_muerte_anunciada.jpg",
      genero: "",
      disponibilidad: true
    },
    {
      id: 6,
      nombre: "Normal people",
      escritor: "Sally Rooney",
      descripcion: "",
      precio: 2500,
      stock: 25,
      img: "/normal_people.jpg",
      genero: "",
      disponibilidad: true
    }

  ]

}
