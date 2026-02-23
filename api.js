




document.addEventListener("DOMContentLoaded",() =>{

    const contenedor = document.getElementById("contenedor_principal")
    const parametro = new URLSearchParams(window.location.search);
    const id = Number(parametro.get("id"));
    let listaProductos = [];

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            listaProductos = data;
            if(id){
                mostrarProducto(data, id);
            }
            else{
                crearTarjeta(data, contenedor);
                idProducto();
                imprimir(listaProductos);
            }
    })  
})

function imprimir(listaProductos){
    console.log(listaProductos);
}

function crearTarjeta(listaProductos, contenedor){
    
    for(let i = 0; i < listaProductos.length; i++){
        let boxProducto = document.createElement("div");
        let boxImagen = document.createElement("div");
        let boxDescripcion = document.createElement("div");
        let imagen = document.createElement("img");
        let titulo = document.createElement("h2"); 
        boxImagen.classList.add("box_imagen");
        boxProducto.classList.add("item_producto");
        boxProducto.classList.add("producto");
        boxProducto.dataset.id = listaProductos[i].id;
        imagen.classList.add("img--catalogo");
        boxDescripcion.classList.add("box_descripcion");    
        imagen.src = listaProductos[i].image;
        titulo.innerText = listaProductos[i].title;
        contenedor.appendChild(boxProducto);
        boxProducto.appendChild(boxImagen);
        boxProducto.appendChild(boxDescripcion);
        boxImagen.appendChild(imagen);
        boxDescripcion.appendChild(titulo);
    } 
    console.log("Elemento creado");
}


function idProducto(){
    let producto = document.querySelectorAll(".item_producto");
    console.log(producto);
    producto.forEach(item => {
        item.addEventListener("click",(e) => {
            let idProducto = e.currentTarget.dataset.id;
            window.location.href = `producto.html?id=${idProducto}`
            console.log("Target", e.target);
            console.log("currentTarget",e.currentTarget.dataset.id)
        })
    })
}

function mostrarProducto(producto, id){
    const imagen = document.querySelector(".producto--imagen")
    const titulo = document.querySelector(".titulo--producto");
    const validado = producto.find(p => p.id === id);
    console.log(validado);
    if(validado){
        titulo.innerText = validado.title;
        imagen.src = validado.image;
    }

}


