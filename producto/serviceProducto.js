// ------------------ LOGICA DE PRODUCTO ------------------------
import { getProductos, selectProducto } from "./apiProducto.js";

export async function obtenerProductos() {
    return await getProductos();
}


export async function selectPro(id) {
    return await selectProducto(id);
}

