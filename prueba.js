
document.addEventListener("DOMContentLoaded", () => {
    validarSesion();
    cerrarsesion();
})

function validarSesion(){
    const validado = sessionStorage.getItem("CorreoUsuario");
    const body = document.querySelector("body")
    const nombre = document.querySelector("#link_usuario");

    if (validado){
        console.log("HOLA LOGUEADOOOOOOOOOO")
        body.classList.add("logged");     
        nombre.textContent = validado;
    }
    else{
        body.classList.remove("logged");
        nombre.textContent = "";
    }
}

function cerrarsesion(){
    document.querySelector("#cerrar_sesion").addEventListener("click", (e) =>{
        e.preventDefault();

        console.log("Sesion Finalizada");
        sessionStorage.removeItem("CorreoUsuario");
        window.location.href = "iniciar_sesion.html";            
    
    })
}


const btn = document.getElementById("boton_menu");

btn.addEventListener("click", () => {
    const menu = document.querySelector(".nav--catalogo");
    menu.classList.toggle("activo");
})

