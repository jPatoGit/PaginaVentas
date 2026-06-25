// ---------------- LOGICA DE REGISTRO -------------------------

import { insertUser } from "./apiuser.js"

export async function registerUser(datos){
    if(Object.values(datos).every(valor => valor !== "")){
        await insertUser(datos);
    }
    else{
        return
    }

}