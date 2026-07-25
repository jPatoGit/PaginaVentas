// ------------------ CONTROLADOR DE FLUJO -----------------------

import { logout, logueo } from "./serviceUser.js";
import { registerUser } from "./register.js";

export function iniciarSesion(){
    const btn = document.querySelector(".button");
    btn.addEventListener("click", async (e)=>{
        e.preventDefault();

        const formulario = document.querySelector(".form");
        const datos = new FormData(formulario);
        const usuario = datos.get("usuario");
        const password = datos.get("password");
        await logueo(usuario, password);
    });
}

export function cerrarsesion(){
    document.querySelector("#cerrar_sesion").addEventListener("click", async (e) =>{
        e.preventDefault();
        await logout();
        window.location.href = "iniciar_sesion.html";            
    
    });
}

export async function registrar(){
    const btnregister = document.querySelector(".btn_registrar");
    btnregister.addEventListener("click", async (e)=>{
        e.preventDefault();

        const formulario = document.getElementById("form_registro");
        const datos = new FormData(formulario);
        const nombre = datos.get("nombre");
        const apellido = datos.get("apellido");
        const correo = datos.get("correo");
        const usuario = datos.get("usuario");
        const password = datos.get("password");
        const dataUser = {
            nombre: nombre,
            apellidos: apellido,
            usuario: usuario,
            password: password,
            correo: correo
        }
        console.log(dataUser);
        await registerUser(dataUser);
        window.location.href="iniciar_sesion.html"; 
    });
}
