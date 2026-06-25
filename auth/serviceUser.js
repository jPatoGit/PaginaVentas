// -------------- FUNCIONES --------------------

import { getUsers, selectUser, insertUser } from "./apiuser.js";
import { userstore } from "../storage/storageUsuario.js";

export async function obtenerUsuarios() {
    return await getUsers();
}

export async function logueo(usuario, password){
    const db = await getUsers();
    for(const dato of db){
        if(usuario === dato.usuario && password === dato.password){
            console.log(dato.usuario)
            userstore.user = dato.usuario;
            userstore.userID = dato.usuario_id;
            window.location.href = "catalogo.html";
            console.log("------------------ LOGUEADO -----------------");
        }
    }
    console.log("------------ CREDENCIALES INCORRECTAS --------------");
    return;
}

export function logout(){
    userstore.removeUser();
    console.log("Sesion Finalizada")
}

export async function nuevoUsuario(data){
    await insertUser(data);
}




