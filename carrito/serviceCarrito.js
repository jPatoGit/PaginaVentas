// ---------------------- LOGICA CARRITO ----------------------

import { getCarrito, checkCompra, insertCarrito, deleteCarrito } from "./apiCarrito.js";
import { store } from "./storageCarrito.js";
import { selectProducto } from "../producto/apiProducto.js";
import { idURL } from "../utils/url.js";


export function crearCarrito(numero){
    const id = idURL();
    let listaCarrito = store.carrito;
    console.log(idURL());
    let producto = listaCarrito.find(p => p.id === id);
    if(producto){
        console.log("YA SE CREO ESTE ITEM SOLO AUMENTA CANTIDAD");
        producto.cantidad = producto.cantidad + Number(numero.value);
        console.log(listaCarrito);
    }
    else{
        console.log("----- Se añade un nuveo item al carrito -------")
        listaCarrito.push({
            id: id,
            cantidad: Number(numero.value)
        })
        console.log(listaCarrito);
    }
    store.carrito = listaCarrito;
}

export function elminarCarrito(idShop){
    const data = store.carrito;
    const validado = data.find( c => c.id === idShop);
    let nuevaData = data.filter( c => c.id !== idShop);
    if(validado){
        console.log(nuevaData);
        localStorage.setItem("carrito", JSON.stringify(nuevaData));
    }
}




