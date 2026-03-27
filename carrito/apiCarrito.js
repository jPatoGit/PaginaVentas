// --------------------- BASE DE DATOS ---------------------

import { client } from "../supabaseClient";

export async function getCarrito() {
    const {data,error} = await client
        .from("Carrito")
        .select("*");
    if(error){
        console.log(error);
    }
}

export async function carritoCompra(lista) {
    const {data,error} = await client
        .from("Orders")
        .insert(lista);
    if(error){
        console.log(error);
    }
}

export async function insertCarrito(listaCarrito) {
    const {data,error} = await client
        .from("Carrito")
        .insert(listaCarrito)
    if(error){
        console.log(error);
    }
}

export async function deleteCarrito(id) {
    const {data,error} = await client
        .from("Carrito")
        .delete()
        .eq("carrito_id", id);
    if(error){
        console.log(error);
    }
}
