// ------------------- MAIN --------------------------
import { añadirCarrito, renderCarrito, deleteCar} from "./carrito/carrito.js";
import { mostrarCatalogo, idProducto, quantity, mostrarProducto } from "./producto/producto.js";
import { cerrarsesion, iniciarSesion, registrar } from "./auth/controller.js";
import { mostrarUsuario } from "./auth/login.js";

document.addEventListener("DOMContentLoaded",async ()=>{
    const page = document.body.id;
    const pageclass = document.body.className;
    
    if(page === "page_catalogo"){
        await mostrarCatalogo();
        idProducto();
    }
    if(page === "page_producto"){
        await mostrarProducto();
        añadirCarrito();
        quantity();
    }
    if(page === "page_carrito"){
        renderCarrito();
        deleteCar();
    }
    if(page === "page_login"){
        iniciarSesion();
    }
    if(page === "page_register"){
        registrar();
    }
    if(pageclass === "logged"){   
        cerrarsesion();
    }
    mostrarUsuario();
})