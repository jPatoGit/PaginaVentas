
const supabaseURL= "https://hteiloplozzjglvdzerw.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWlsb3Bsb3p6amdsdmR6ZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTA2MjMsImV4cCI6MjA4ODM4NjYyM30.lF3sAokCqVj69tLaXZKVhGL5r27ud22iJOxU3wAVV4A";

const client = supabase.createClient(supabaseURL,supabaseKEY);

document.addEventListener("DOMContentLoaded",async () =>{

    const contenedorCatalogo = document.getElementById("contenedor_principal")
    const parametro = new URLSearchParams(window.location.search);
    const btnCompra = document.querySelector(".btn_comprar");
    const id = Number(parametro.get("id"));
    const user = sessionStorage.getItem("CorreoUsuario");
    if(id){
        mostrarProducto(id);
        cantidad();
    }else{
        await crearTarjeta(contenedorCatalogo);
        idProducto();
    }
    console.log(user); 

    const img = document.querySelector(".producto--imagen");

    img.addEventListener("mousemove", (e) => {
        const rect = img.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        img.style.transform = "scale(2)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
    /*
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            listaProductos = data;
            if(id){
                mostrarProducto(id);
            }
            else{
                crearTarjeta(contenedor);
                idProducto();
                imprimir(listaProductos);
                
            }
    })*/
})


async function getProductos() {
    const {data, error} = await client
        .from("Productos")
        .select("*")
        .order("producto_id",{ascending: true});
    if(error){
        console.log(error);
    }
    return data;
}

async function crearTarjeta(contenedor){
    const db = await getProductos();
    for(let i = 0; i < db.length; i++){
        let boxProducto = document.createElement("div");
        let boxImagen = document.createElement("div");
        let boxDescripcion = document.createElement("div");
        let imagen = document.createElement("img");
        let titulo = document.createElement("h2"); 
        boxImagen.classList.add("box_imagen");
        boxProducto.classList.add("item_producto");
        boxProducto.classList.add("producto");
        boxProducto.dataset.id = db[i].producto_id;
        imagen.classList.add("img--catalogo");
        boxDescripcion.classList.add("box_descripcion");    
        imagen.src = db[i].imagen;
        titulo.innerText = db[i].nombre;
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

async function mostrarProducto(id){
    const db = await getProductos();
    const imagen = document.querySelector(".producto--imagen")
    const titulo = document.querySelector(".titulo--producto");
    const precio = document.querySelector(".precio");
    const descripcion = document.querySelector(".descripcion");
    const validado = db.find(p => p.producto_id === id);
    console.log("----------- validadooo --------------");
    console.log(validado);
    if(validado){
        titulo.innerText = validado.nombre;
        imagen.src = validado.imagen;
        precio.innerText = `$${validado.precio} soles`;
        descripcion.innerText = validado.descripcion;
    }
    
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




