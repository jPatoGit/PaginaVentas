// ------------------- BD DE USUARIOS ------------------

import { client } from "../supabaseClient.js";

export async function getUsers() {
    const {data, error} = await client
        .from("Usuarios")
        .select("*")
        .order("usuario_id",{ascending:true});
    if(error){
        console.log(error);
        return [];
    }
    return data;
}

export async function selectUser(id) {
    const {data, error} = await client
        .from("Usuarios")
        .select("*")
        .eq("usuario_id", id)
        .single();
    if(error){
        console.log(error);
        return [];
    }
    return data;
}

export async function insertUser(dataUser) {
    const {data, error} = await client
        .from("Usuarios")
        .insert(dataUser);
    if(error){
        console.log(error);
    }
}