/*
function agregartexto(texto) {

    if (contenedor == null) {
        contenedor = document.createElement("div");
        const p = document.createElement("p");    
        contenedor.classList.add("nuevacaja");
        p.classList.add("nuevotexto")
        p.textContent = texto;
        contenedor.appendChild(p);
        document.body.appendChild(contenedor);
        console.log("No hay div creado" + p.textContent);
    }else{
        const p = contenedor.querySelector(".nuevotexto")
        p.textContent = texto;
        console.log("Ya se creo un div" + p.textContent);        
    }

}
*/
//let contenedor = null;
let formulario = document.querySelector(".form");

let cuentas = ["jose", "carlos", "cancino", "josecarloscancinomamani"];

const supabaseURL= "https://hteiloplozzjglvdzerw.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWlsb3Bsb3p6amdsdmR6ZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTA2MjMsImV4cCI6MjA4ODM4NjYyM30.lF3sAokCqVj69tLaXZKVhGL5r27ud22iJOxU3wAVV4A";

const dataBase = supabase.createClient(supabaseURL,supabaseKEY  );

async function validarUsuario(){

    const {data, error} = await dataBase
        .from("Usuarios")
        .select("*");

    if(error){
        console.log(error);
        return;
    }
    const datos = new FormData(formulario);
    const formUsuario = datos.get("usuario");
    const formPassword = datos.get("password");
    for (const item of data){
        if (formUsuario === item.usuario && formPassword === item.password){
            sessionStorage.setItem("CorreoUsuario", formUsuario);
            sessionStorage.setItem("usuarioID", item.usuario_id)
            window.location.href = "catalogo.html";
            console.log("----------------- LOGUEADOO --------------------") 
        }
    }
    console.log("---------------- CREDENCIALES INCORRECTAS ---------------------")
    return;
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarUsuario();
})

document.addEventListener("DOMContentLoaded", () =>{

})









