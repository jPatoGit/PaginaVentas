// ----------------------- RENDERIZADO DE CARRITO ---------------------

import { crearCarrito, elminarCarrito } from "./serviceCarrito.js";
import { store } from "../storage/storageCarrito.js";
import { obtenerProductos } from "../producto/serviceProducto.js";

export function añadirCarrito(){
    const btnañadir = document.querySelector(".btn_carrito");
    let cantidad = document.querySelector(".cantidad");
    btnañadir.addEventListener("click",()=>{
        crearCarrito(cantidad);
    })
}

export async function renderCarrito(){
    let carrito = store.carrito;
    const contenedorCarrito = document.querySelector(".car_globalcontainer");
    const contenedorPrincipal = document.querySelector(".car_container_general");
    const btnComprar = document.querySelector(".btn_comprar");
    console.log("----- MOSTRANDO PRODUCTOS EN CARRITO ---------");
    console.log(carrito);
    const db = await obtenerProductos();
    let contenido = ``;
    carrito.forEach(item => {
            let data = db.find(p => p.producto_id === item.id);
            let contenidoHTML = `
                        <div class="car_container" data-id="${data.producto_id}">
                            <div  class="car_container--imagen">
                                <img src="${data.imagen}" alt="">
                            </div>
                            <div class="car_container--descripcion">
                                <h2>${data.nombre}</h2>
                                <p>Cantidad: ${item.cantidad}</p>
                                <p>Precio Total: S/ ${Number(item.cantidad)*data.precio}</p>
                            </div>
                            <button class="btn_eliminarCarrito"><span class="material-symbols-outlined">delete</span></button>
                        </div>
                    `       
        contenido = contenido + contenidoHTML;
    });
    if(contenedorPrincipal){
        contenedorPrincipal.classList.remove("car_oculto");
    }
    if(carrito.length > 0){       
        contenedorCarrito.innerHTML = contenido;
        btnComprar.disabled = false;
    }
    else{
        btnComprar.disabled = true;
        contenedorCarrito.innerHTML = "Tu carrito no tiene PRODUCTOS"
    } 
}

export function deleteCar(){
    document.addEventListener("click",(e)=>{
        if(!e.target.closest(".btn_eliminarCarrito")) return;

        const contenedor = e.target.closest(".car_container");
        const id = Number(contenedor.dataset.id);
        elminarCarrito(id);
        renderCarrito();
    })
}

