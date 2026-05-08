// ------------------ RENDER LOGIN -----------------
import { userstore } from "../storage/storageUsuario.js";

export function mostrarUsuario(){
    const validado = sessionStorage.getItem("CorreoUsuario");
    const body = document.querySelector("body")
    const nombre = document.querySelector("#link_usuario");
    const usuarioID = userstore.userID;

    if (validado){
        console.log(`HOLAA LOGUEADOOOOO ${usuarioID}`);
        body.classList.add("logged");     
        nombre.textContent = validado;
    }
    else{
        body.classList.remove("logged");
        nombre.textContent = " ";
    }

}