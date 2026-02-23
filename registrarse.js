
let registro = document.getElementById("form_registro");
console.log(registro);

let cuentas = ["jose", "carlos", "cancino", "josecarloscancinomamani"];

const letras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const numeros = /^[0-9]+$/;



function registrarUsuario(){
    const datos = new FormData(registro);
    const usuario = datos.get("usuario");
    const numero = datos.get("celular");
    if(!letras.test(usuario) || !numeros.test(numero)){
        alert("No se admiten numero en el Usuario !!!!!!!!!!!")
    }else{
        window.location.href = "iniciar_sesion.html";
        sessionStorage.setItem("nuevoUsuario", usuario);
    }
}



registro.addEventListener("submit", (e)=>{
    e.preventDefault();
    registrarUsuario();
})