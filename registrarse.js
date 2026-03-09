let registro = document.getElementById("form_registro");

const letras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const numeros = /^[0-9]+$/;

const supabaseURL= "https://hteiloplozzjglvdzerw.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWlsb3Bsb3p6amdsdmR6ZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTA2MjMsImV4cCI6MjA4ODM4NjYyM30.lF3sAokCqVj69tLaXZKVhGL5r27ud22iJOxU3wAVV4A";

const client = supabase.createClient(supabaseURL,supabaseKEY);

async function obtenerUsusarios(){
    const {data, error} = await client
        .from("Usuarios")
        .select("*");
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
}

document.addEventListener("DOMContentLoaded",()=>{
    obtenerUsusarios();
    verImagen();
})




async function registrarUsuario(){
    const datos = new FormData(registro);
    const formNombre = datos.get("nombre");
    const formApellido = datos.get("apellido");
    const formUsuario = datos.get("usuario");
    const formPassword = datos.get("password")
    if(!letras.test(formNombre) && !letras.test(formApellido)){
        alert("No se admiten numero en el nombre o apellido")
    }else{
        const {data, error} = await client
            .from("Usuarios")
            .insert([
                {nombre: formNombre, apellidos: formApellido, usuario: formUsuario, password: formPassword}
            ]);
        if(error){
            console.log(error);
            return;
        }
        console.log("REGISTRO EXITOSO");
    }
    
}
//https://hteiloplozzjglvdzerw.supabase.co/storage/v1/object/public/Imagenes/prueba1.png

async function verImagen(){
    const prueba = document.querySelector(".imgprueba")
    const {data, error} = await client.storage
        .from("Imagenes")
        .list("");
    if(error){
        console.log(error);
        return;
    }
    
    data.forEach(img => {
        const {data,error} = client.storage
            .from("Imagenes")
            .getPublicUrl(img.name);
        console.log(data);
    });
}


registro.addEventListener("submit", (e)=>{
    e.preventDefault();
    registrarUsuario();
})




