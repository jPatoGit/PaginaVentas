// ------------------ CONTROLADOR DE FLUJO -----------------------

import { obtenerUsuarios } from "./serviceUser.js";
import { userstore } from "../storage/storageUsuario.js";
import { logueo } from "./serviceUser.js";
import { mostrarUsuario } from "./login.js";

export async function iniciarSesion(){
    const btn = document.querySelector(".button");
    btn.addEventListener("click",()=>{
        logueo();
    })
}

export function cerrarsesion(){
    document.querySelector("#cerrar_sesion").addEventListener("click", (e) =>{
        e.preventDefault();

        console.log("Sesion Finalizada");
        userstore.removeUser();
        window.location.href = "iniciar_sesion.html";            
    
    })
}

export function validarLogueo(){
    mostrarUsuario();
}