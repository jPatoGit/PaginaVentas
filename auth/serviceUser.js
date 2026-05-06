// -------------- FUNCIONES --------------------

import { getUsers } from "./apiuser.js";

export async function obtenerUsuarios() {
    return await getUsers();
}