// ------------------- MAIN --------------------------
import { añadirCarrito, renderCarrito, deleteCar} from "./carrito/carrito.js";
import { mostrarCatalogo, idProducto, quantity, mostrarProducto } from "./producto/producto.js";
import { cerrarsesion, iniciarSesion, validarLogueo } from "./auth/controller.js";
import { logueo } from "./auth/serviceUser.js";
import { mostrarUsuario } from "./auth/login.js";

document.addEventListener("DOMContentLoaded",async ()=>{
    const page = document.body.id;
    
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
    mostrarUsuario();
    cerrarsesion();
})