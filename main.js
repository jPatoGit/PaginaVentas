// ------------------- MAIN --------------------------
import { mostrarCatalogo, idProducto, cantidad, mostrarProducto } from "./producto/producto.js";

document.addEventListener("DOMContentLoaded",()=>{
    const page = document.body.id;
    if(page === "page_catalogo"){
        mostrarCatalogo();
        idProducto();
    }
    if(page === "page_producto"){
        mostrarProducto();
        cantidad();
    }
    
})