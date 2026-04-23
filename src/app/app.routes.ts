import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Producto } from './paginas/producto/producto';
import { Contacto } from './paginas/contacto/contacto';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';

export const routes: Routes = [
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
    { path: "Inicio", component: Inicio },
    { path: "Ofertas", component: Ofertas },
    { path: "Producto", component: Producto },
    { path: "Contacto", component: Contacto },
    { path: "InicioSesion", component: InicioSesion },
    { path: "Registro", component: Registro },
    { path: "Carrito", component: Carrito },
    { path: "Favoritos", component: Favoritos }
];
