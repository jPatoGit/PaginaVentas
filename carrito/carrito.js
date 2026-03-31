// ----------------------- RENDERIZADO DE CARRITO ---------------------

import { obtenerCarrito, crearCarrito } from "./serviceCarrito.js";

export function añadirCarrito(){
    const btnCarrito = document.querySelector(".btn_carrito");
    btnCarrito.addEventListener("click",()=>{
        console.log("Vamos a crear el carrito de compras")
    })
}