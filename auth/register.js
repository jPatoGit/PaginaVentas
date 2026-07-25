// ---------------- LOGICA DE REGISTRO -------------------------

import { insertUser } from "./apiuser.js"

export async function registerUser(datos){
    if(Object.values(datos).every(valor => valor.trim() !== "")){   
        await insertUser(datos);
        console.log("REGISTRO EXITOSO!!!!!")
    }
    else{
        console.log("Es requerido llenar todos los campos para el registro")
        return
    }

}