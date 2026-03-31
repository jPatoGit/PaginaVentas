// --------------- BASE DE DATOS PRODUCTOS --------------------

import { client } from "../supabaseClient.js";

export async function getProductos() {
    const {data,error} = await client
        .from("Productos")
        .select("*")
        .order("producto_id",{ascending:true});
    if(error){
        console.log(error);
        return [];
    }
    return data;
}

export async function selectProducto(idP) {
    console.time("API");
    const {data,error} = await client
        .from("Productos")
        .select("*")
        .eq("producto_id", idP)
        .single();
    if(error){
        console.log(error);
    }
    console.timeEnd("API");
    return data;

}


export async function updateStock(lista, id, compra) {
    const {data, error} = await client
        .from("Productos")
        .update({stock : lista.stock - compra})
        .eq("producto_id", id);
    if(error){
        console.log(error);
    }
}


