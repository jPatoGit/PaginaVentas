// ----------------- RENDERIZACION DE PRODUCTOS ------------------

import { obtenerProductos, selectPro } from "./serviceProducto.js";

export async function mostrarCatalogo(){
    const contenedor = document.getElementById("contenedor_principal");
    const db = await obtenerProductos();
    let content = ``;
    for( let i=0; i<=db.length; i ++){
        let contenido = `
                        <div class="item_producto producto" data-id="${db[i].producto_id}">
                            <div class="box_imagen">
                                <img class="img--catalogo" src="${db[i].imagen}" alt="">
                            </div>
                            <div class="box_descripcion">
                                <h2>${db[i].nombre}</h2>
                            </div>
                        </div>`
        content = content + contenido;
    }
    contenedor.innerHTML = content;
    console.log("------Mostrando productos de UI-----");
    console.log( await obtenerProductos());
}

export function idProducto(){
    const itemCatalogo = document.querySelectorAll(".item_producto");
    itemCatalogo.forEach(item =>{
        item.addEventListener("click",(e)=>{
            const idP = e.currentTarget.dataset.id;
            window.location.href = `producto.html?id=${idP}`;
        })
    }) 
}

export async function mostrarProducto(){
    const parametro = new URLSearchParams(window.location.search);
    const id = Number(parametro.get("id"));
    const validado = await selectPro(id);
    const imagen = document.querySelector(".producto--imagen")
    const titulo = document.querySelector(".titulo--producto");
    const precio = document.querySelector(".precio");
    const descripcion = document.querySelector(".descripcion");
    if(validado){
        imagen.src = validado.imagen;
        titulo.innerText = validado.nombre;
        precio.innerText = `S/${validado.precio}. soles`;
        descripcion.innerText = validado.descripcion;
    }
}

export function cantidad(){
    const btnMas = document.querySelector(".btnMas");
    const btnMenos = document.querySelector(".btnMenos");
    const cantidad = document.querySelector(".cantidad");
    btnMas.addEventListener("click",()=>{
        cantidad.value = Number(cantidad.value) +1;
    })

    btnMenos.addEventListener("click",()=>{
        if(Number(cantidad.value) > 1){
            cantidad.value = Number(cantidad.value) - 1;
        }
    })
}