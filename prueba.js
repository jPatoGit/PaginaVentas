
document.addEventListener("DOMContentLoaded", () => {
    validarSesion();
    cerrarsesion();
})

function validarSesion(){
    const validado = sessionStorage.getItem("CorreoUsuario");
    const lista = document.querySelectorAll(".item_prueba")
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


const track = document.querySelector(".track");

let position = 0;
const speed = 0.5; // píxeles por frame

function animar() {
    position -= speed;

    // cuando el primer elemento sale completamente
    if (Math.abs(position) >= track.children[0].offsetWidth + 20) {
        track.appendChild(track.children[0]); // mueve la card al final
        position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animar);
}

animar();
