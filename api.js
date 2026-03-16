
const supabaseURL= "https://hteiloplozzjglvdzerw.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWlsb3Bsb3p6amdsdmR6ZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTA2MjMsImV4cCI6MjA4ODM4NjYyM30.lF3sAokCqVj69tLaXZKVhGL5r27ud22iJOxU3wAVV4A";

const client = supabase.createClient(supabaseURL,supabaseKEY);

document.addEventListener("DOMContentLoaded",() =>{

    const contenedor = document.getElementById("contenedor_principal")
    const parametro = new URLSearchParams(window.location.search);
    const btnCompra = document.querySelector(".btn_comprar");
    const id = Number(parametro.get("id"));
    const user = sessionStorage.getItem("CorreoUsuario");
    let listaProductos = [];
    console.log(user);

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            listaProductos = data;
            if(id){
                mostrarProducto(data, id);
                btnCompra.addEventListener("click",()=>{
                    comprar(data, id);
                })
            }
            else{
                crearTarjeta(data, contenedor);
                idProducto();
                imprimir(listaProductos);
                
            }
    })
    cantidad();
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
    //console.log(producto);
    producto.forEach(item => {
        item.addEventListener("click",(e) => {
            console.log(e);
            console.log("Target", e.target);
            console.log("currentTarget",e.currentTarget)
            console.log("Holaaaaaaaaaaaaaaaaaaa");
            let idProducto = e.currentTarget.dataset.id;
            window.location.href = `producto.html?id=${idProducto}`
        })
    })
}

function mostrarProducto(producto, id){
    const imagen = document.querySelector(".producto--imagen")
    const titulo = document.querySelector(".titulo--producto");
    const precio = document.querySelector(".precio");
    const descripcion = document.querySelector(".descripcion");
    const validado = producto.find(p => p.id === id);
    console.log(validado);
    if(validado){
        titulo.innerText = validado.title;
        imagen.src = validado.image;
        precio.innerText = `$${validado.price} soles`;
        descripcion.innerText = validado.description;
    }
    
}


async function comprar(product, producID){
    const userID = sessionStorage.getItem("usuarioID");
    const validado = sessionStorage.getItem("CorreoUsuario");
    const cantidad = document.querySelector(".cantidad");
    const order = product.find(p => p.id === producID);
    let checkCompra = false;
    console.log(typeof order.price)
    console.log(validado);
    if(validado){
        checkCompra = true;
        const {data, error} = await client
            .from("Orders")
            .insert([
                {
                    usuario_id: userID, 
                    producto_id: producID, 
                    precio:order.price, 
                    cantidad: cantidad.value, 
                    country: "Peru"}
            ]);
        
        if(error){
            console.log(error);
        }
        if(checkCompra === true){
            updateStock();
            alert("COMPRA REALIZADAAAAA");
            console.log("Actualizando stock de producto");
        }
    }
    if(validado === null){
        alert("Necesitas loguearte para comprar");
        return;
    }
}

async function updateStock() {
    const cantidad = document.querySelector(".cantidad");
    const compra = cantidad.value;
    const parametro = new URLSearchParams(window.location.search);
    const id = Number(parametro.get("id"));
    const producto =  await encontradoProducto(id);
    const {data,error} = await client
        .from("Productos")
        .update({stock: producto.stock - compra})
        .eq("producto_id", id);
    if(error){
        console.log(error);
    }
    console.log(`Stockk -- ${producto.stock}`);     
}


async function encontradoProducto(id){
    const {data, error} = await client
        .from("Productos")
        .select("*")
        .eq("producto_id",id)
        .single();
    if(error){
        console.log(error);
        return;
    }
    return data;
}

function cantidad(){
    const btnMas = document.querySelector(".btnMas");
    const btnMenos = document.querySelector(".btnMenos");
    const cantidad = document.querySelector(".cantidad");
    btnMas.addEventListener("click",()=>{
        cantidad.value = Number(cantidad.value) +1;
    })

    btnMenos.addEventListener("click",()=>{
        if(cantidad.value > 1){
            cantidad.value = Number(cantidad.value) - 1;
        }
    })
}

