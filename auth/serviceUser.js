// -------------- FUNCIONES --------------------

import { getUsers, selectUser, insertUser } from "./apiuser.js";
import { userstore } from "../storage/storageUsuario.js";

export async function obtenerUsuarios() {
    return await getUsers();
}

export async function logueo(){
    const db = await getUsers();
    const formulario = document.querySelector(".form");
    const datos = new FormData(formulario);
    const usuario = datos.get("usuario");
    const password = datos.get("password");
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




