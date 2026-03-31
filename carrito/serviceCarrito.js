// ---------------------- LOGICA CARRITO ----------------------

import { getCarrito, checkCompra, insertCarrito, deleteCarrito } from "./apiCarrito.js";
import { store } from "./storageCarrito.js";

export function obtenerCarrito(){
    return store.carrito;
}

export function crearCarrito(){
    const carrito = new Carrito();
    store.carrito = carrito;
    return carrito;
}





