// ------------------ RENDER LOGIN -----------------

import { obtenerUsuarios } from "./serviceUser.js";

export async function mostrarUsuarios(){
    let lista = await obtenerUsuarios();
    const btn = document.querySelector(".button");
    btn.addEventListener("click",()=>{
        console.log("--------- USUSARIOS ----------")
        console.log(lista);
    })
}