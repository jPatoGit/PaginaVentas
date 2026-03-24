/*const supabaseURL= "https://hteiloplozzjglvdzerw.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWlsb3Bsb3p6amdsdmR6ZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTA2MjMsImV4cCI6MjA4ODM4NjYyM30.lF3sAokCqVj69tLaXZKVhGL5r27ud22iJOxU3wAVV4A";

const client = supabase.createClient(supabaseURL,supabaseKEY);
*/
document.addEventListener("DOMContentLoaded",async (e) =>{

    const parametro = new URLSearchParams(window.location.search);
    const btnCompra = document.querySelector(".btn_comprar");
    const btnCarrito = document.querySelector(".btn_carrito");
    const id = Number(parametro.get("id"));
    console.log(`IDDDD ${id}`);
    if(id){
        btnCarrito.addEventListener("click",()=>{
        agregarCarrito()
    }) 
    }else{
        await mostrarCarrito();
        document.addEventListener("click",(e) => {
            const contenedorCarrito = e.target.closest(".car_container");
            const idCarrito = Number(contenedorCarrito.dataset.id);
            if(e.target.closest(".btn_eliminarCarrito")){
                elminarCarrito(idCarrito);
                mostrarCarrito();
            }
        })
        btnCompra.addEventListener("click",()=>{
            comprar();
        })
    } 
    /*
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
                console.log(data);
                /*btnCompra.addEventListener("click",()=>{
                    mostrarProductos();
                }) 
    })*/
})


function comprar(/*product, producID*/){
    alert("Producto comprado");

    /*const userID = sessionStorage.getItem("usuarioID");
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
    }*/
}
/*
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
*/

function agregarCarrito(){
    const parametro = new URLSearchParams(window.location.search);
    const id = Number(parametro.get("id"));
    const cantidad = document.querySelector(".cantidad");
    let listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = listaCarrito.find(p => p.id === id);
    if(producto){
        console.log(" ------------ Ya se creo --------------");
        producto.cantidad = producto.cantidad + Number(cantidad.value);
        console.log(listaCarrito);
    }
    else{
        console.log("Se agrega uno nuevo")
        listaCarrito.push({
            id: id,
            cantidad: Number(cantidad.value)
        })
        console.log(listaCarrito);
    }
    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
}

async function mostrarCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    const contenedorCarrito = document.querySelector(".car_globalcontainer");
    const btnComprar = document.querySelector(".btn_comprar")
    console.log("----- MOSTRANDO PRODCUTOS EN CARRITO ---------");
    console.log(carrito);
    const db = await getProductos();
    let contenido = ``; 
    carrito.forEach(item => {
            let data = db.find(p => p.producto_id === item.id);
            let contenidoHTML = `
                        <div class="car_container" data-id="${data.producto_id}">
                            <div  class="car_container--imagen">
                                <img src="${data.imagen}" alt="">
                            </div>
                            <div class="car_container--descripcion">
                                <h2>${data.nombre}</h2>
                                <p>Cantidad: ${item.cantidad}</p>
                                <p>Precio Total: S/ ${Number(item.cantidad)*data.precio}</p>
                            </div>
                            <button class="btn_eliminarCarrito"><span class="material-symbols-outlined">delete</span></button>
                        </div>
                    `       
        contenido = contenido + contenidoHTML;
    });
    if(carrito.length > 0){       
        contenedorCarrito.innerHTML = contenido;
        btnComprar.disabled = false;
    }
    else{
        btnComprar.disabled = true;
        contenedorCarrito.innerHTML = "Tu carrito no tiene PRODUCTOS"
    } 
}

function elminarCarrito(itemCarrito){
    const data = JSON.parse(localStorage.getItem("carrito"))
    const validado = data.find( c => c.id === itemCarrito);
    let nuevaData = data.filter( c => c.id !== itemCarrito);
    if(validado){
        console.log(nuevaData);
        localStorage.setItem("carrito", JSON.stringify(nuevaData));
        alert(`Se va a elimar el item con id N° ${itemCarrito}`);
    }
}



/*
async function insertarData(dataProductos){
        const {data, error} = await client
            .from("Productos")
            .insert([{
                nombre: dataProductos.title,
                precio: dataProductos.price,
                descripcion: dataProductos.description,
                imagen: dataProductos.image
            }
        ])
    if(error){
        console.log(error);
    }   
    console.log("Data INGRESADAAAAAAAAA")
}
*/
