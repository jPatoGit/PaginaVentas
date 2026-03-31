// ------------------- MAIN --------------------------
import { añadirCarrito } from "./carrito/carrito.js";
import { mostrarCatalogo, idProducto, cantidad, mostrarProducto } from "./producto/producto.js";

document.addEventListener("DOMContentLoaded",async ()=>{
    const page = document.body.id;
    if(page === "page_catalogo"){
        await mostrarCatalogo();
        idProducto();
    }
    if(page === "page_producto"){
        mostrarProducto();
        añadirCarrito();
        cantidad();
    }
    
})