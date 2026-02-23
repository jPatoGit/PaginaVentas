
let formulario = document.querySelector(".form");

let contenedor = null;

let cuentas = ["jose", "carlos", "cancino", "josecarloscancinomamani"];

function nuevoUsuario(){
    const nUsuario = sessionStorage.getItem("nuevoUsuario");
    cuentas.push(nUsuario);
    console.log(cuentas);
    console.log(nUsuario);
}


function validarUsuario(){
    const datos = new FormData(formulario);
    const usuario = datos.get("usuario");
    agregartexto(usuario);

    cuentas.forEach(item => {
        if (usuario === item){
            window.location.href = "catalogo.html";
            sessionStorage.setItem("CorreoUsuario", usuario);
            console.log("-------------Estas logueado------------------");
        }
        else{
            console.log("----------Credenciales incorrectas-----------")
        }
    })

}


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

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarUsuario();
})

document.addEventListener("DOMContentLoaded", () =>{
    nuevoUsuario();
})









