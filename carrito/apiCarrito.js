// --------------------- BASE DE DATOS ---------------------

import { client } from "../supabaseClient";

export async function carritoCompra(lista) {
    const {data,error} = await client
        .from("Orders")
        .insert(lista);
    if(error){
        console.log(error);
    }
}

