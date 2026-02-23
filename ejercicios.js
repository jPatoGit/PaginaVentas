/*
const nroAlumnos = parseInt(prompt("¿Cuantos alumnos son en total?"));
const listaAlumnos = []

for(let i = 1; i<=nroAlumnos; i++){
    let alumno = prompt("Nombre del alumno Nro: " + i);
    listaAlumnos.push(alumno);
    document.writeln("Alumno Nro: " + i + "-> " + alumno + "<br>");
}
document.writeln("<br>")
document.writeln("------------------------ LISTA DE ASIS Y AUSENCIAS -------------------------------- <br><br>")

for(i in listaAlumnos){
    let asistencias = parseInt(prompt("Ingrese la asistencia del alumno: "+ listaAlumnos[i]));
    
    document.writeln("<span> El alumno " + listaAlumnos[i]+ " tuvo " + asistencias + " asistencias</span>");
    
    let ausencias = 30 - asistencias;
    document.writeln("<span> El alumno " + listaAlumnos[i]+ " tuvo " + ausencias + " ausencias </span><br>");

    if(ausencias > 3){
        document.writeln( "<span style='color:red;'>" + listaAlumnos[i] + " ESTAS REPROBADO !!!!!!!!!! </span><br>");
    }
    else{
        document.writeln( "<span style='color:blue;'>" + listaAlumnos[i] + " ESTAS APROBADO !!!!!!!!!! </span><br>");
    }

}
*/

//---------------------- POO -------------------------------

/*
class Celular {
    constructor(color, peso, rePantalla, reCamara, memoriaRam){
        this.color = color;
        this.peso = peso;
        this.rePantalla = rePantalla;
        this.reCamara = reCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
        this.info =  `<p>Este modelo es de color ${this.color}, tiene un peso de ${this.peso}, además tiene una resolucion de pantalla de ${this.rePantalla}, tambien cuenta con una resolucion de cámara de ${this.reCamara} y posee Memoria RAM de ${this.memoriaRam}</p>`
    }

    verInfo(){
        return this.info;
    }

    botonEncender(){
        alert("Vamos a prender el celular");
    }
    reiniciar(){
        alert("Este celular esta reiniciando");
    }
    apagar(){
        alert("Este celular esta apagandose");
    }
    tomarFoto(){
        alert("Este celular puede tomar foto");
    }
    grabar(){
        alert("Este celular puede grabar");
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, rePantalla, reCamara, memoriaRam){
        super(color, peso, rePantalla, reCamara, memoriaRam);
        this.lectorFacial = true;
        this.camaraLenta = true;
    }
    verInfo(){
        return super.verInfo() + "Lector Facil: Si <br> Camara Lenta: Si";
    }
}

const celularesTienda = {
    1 : new Celular("rojo","6 gr","1080 x 2400px","12 MP","6 GB"),
    2 : new Celular("gris","5 gr","1080 x 2400px","20 MP","8 GB"),
    3 : new Celular("verde agua","5 gr","1080 x 2400px","14 MP","8 GB"), 
    4 : new Celular("azul","6 gr","1080 x 2400px","10 MP","6 GB"),
    5 : new Celular("negro","7 gr","1080 x 2400px","18 MP","8 GB")
}

const celularesTiendaAltaGama = {
    1: new CelularAltaGama("platedo","4.5 gr", "1080 x 1060px","18 MP","12 GB"),
    2: new CelularAltaGama("rosado","4 gr","2040 x 4080 px","14 MP","8 GB")
}



document.addEventListener("DOMContentLoaded",() => {
    const boton = document.getElementById("boton_celular")
    const botonAG = document.getElementById("boton_altagama");
    boton.addEventListener("click",() => {
        console.log("boton1");
        const tipoCelular = prompt("Hola Bienvenido!!!!! \nTenemos los siguientes modelos de celularaes disponibles en nuestra tienda, selecciona el modelo que te interesa para ver sus características:\n1 -> iPhone 15\n2 -> iPhone 16\n3 -> Samsung Galaxy A5\n4 -> Samsung Galaxy SE\n5 -> Xiaomy 15S");
        document.getElementById("info_celular").innerHTML = celularesTienda[tipoCelular].verInfo();
        
    })

    botonAG.addEventListener("click",() => {
        console.log("boton2");
        const tipo = prompt("Hola Bienvenido!!!!! \nTenemos los siguientes modelos de celularaes Alta Gama disponibles en nuestra tienda, selecciona el modelo que te interesa para ver sus características:\n1 -> iPhone 17 PROMAX\n2 -> Samsung GALAXY ULTRA 5G");
        document.getElementById("info_celular").innerHTML = celularesTiendaAltaGama[tipo].verInfo();
    })
})


let cadena = ["Jose","Carlos","Cancino","Austin","Mario","Luis"];

document.writeln(`Cadena Original:<br>  ${cadena} <br><br>`)
let resultado = cadena.join();

document.writeln(`Mostrando cadena modificada: <br>${cadena.length} <br><br>`);
document.writeln(`Mostrando resultado: <br>${resultado.length} <br><br>`);


*/

const listaMaterias = [
    {
        nombre: "Matematica Avanzada",
        profesor: "Juan Perez",
        alumnos: ["Carlos Fuente", "Camilo Said","Juan Garcia"]
    },
    {
        nombre: "Diseño de App Web",
        profesor: "Dante Pineda",
        alumnos: ["Jose Cancino","Wendy Diaz","Sofia Ventura"]
    },
    {
        nombre: "POO-JavaScript",
        profesor: "Carlos Ramirez",
        alumnos: ["Santiago Pertuz","Brenda Matos","Juan Aybar"]
    },
    {
        nombre: "Diseño de App Movil",
        profesor: "Cesar Mendoza",
        alumnos: ["Jose Diamante","Jose Cancino","Gary Arias"]
    },
    {
        nombre: "Emprendimiento",
        profesor: "Maria Jaramillo",
        alumnos: ["Jose Cancino","Karla Bedolla","Wendy Diaz"]
    },
    {
        nombre: "CSS",
        profesor: "Dennis Apaza",
        alumnos: ["Dona Mejia","Camilo Andrade","Pedro Jaramillo"]
    }
];



const btn = document.getElementById("boton_materia");
const btnAlumno = document.getElementById("boton_alumno");
const btnInscribir = document.getElementById("boton_inscripcion");
const texto = document.getElementById("info");
const textoclases = document.getElementById("info_clases")



function infoMateria(mat){
    let validarMateria = false;
    for(let i in listaMaterias){
        if(mat === listaMaterias[i].nombre){
            validarMateria = true;
            texto.innerHTML = `El profesor del curso es: ${listaMaterias[i].profesor}<br>Los Alumnos inscritos son: <br>${listaMaterias[i].alumnos}`;
            textoclases.innerHTML = " ";
            break;
        } 
    }
    if (validarMateria == false){
        texto.innerHTML = "NO EXISTE!!!!!!!!!";
    }
}


function verClases(alumno){
    let contador = 0;
    let contenido = "";
    for(let m in listaMaterias){
        for(let i in listaMaterias[m].alumnos){
            if(alumno == listaMaterias[m].alumnos[i]){
                contador = contador + 1;
                texto.innerHTML = `El alumno ${alumno} esta en ${contador} clases.`;
                contenido += `La clase numero ${contador} es: ${listaMaterias[m].nombre}<br>El profesor encargado es: ${listaMaterias[m].profesor} <br><br>`;
                textoclases.innerHTML = contenido;
            }               
        }   
    }
    if(contador === 0){
        texto.innerHTML = "No Existe el Alumno";
        textoclases.innerHTML = " ";
    }   
}      

function inscripcionAlumno(curso){   
    //const nuevoAlumno = prompt("Ingresa tus nombres completos:")
    for(let c of listaMaterias){
        if(curso === c.nombre){
            if(c.alumnos.length >=5){
                alert("CURSO LLENOOOOOOOOO!!!!!");
                texto.innerHTML = `CURSO: ${curso}`
                textoclases.innerHTML = `LISTA NUEVA: ${c.alumnos} ---- ${c.alumnos.length} ----`
                return;
            }

            const nuevoAlumno = prompt("Ingresa tus nombres para inscribirte a este curso:");
            c.alumnos.push(nuevoAlumno);    
            texto.innerHTML = `CURSO: ${curso}`
            textoclases.innerHTML = `LISTA NUEVA: ${c.alumnos} ---- ${c.alumnos.length} ----`
            console.log("Correcto el curso")
            console.log(c.alumnos);
            console.log(c.alumnos.length)
            return; 
        }    
    }

    console.log(curso);
    if(curso === "" || curso === null){
        alert("No ingresaste CURSO")
        return
    }   
    alert("EL CURSO NO EXISTE !!!!");
}



btn.addEventListener("click",()=>{
    let materia = prompt("Hola tenemos las siguientes Materias: \nMatematica Avanzada \nDiseño de App Web \nPOO-JavaScript \nDiseño de App Movil \nEmprendimiento \nCSS \nIngresa la materia para ver su información:");
    infoMateria(materia); 
})

btnAlumno.addEventListener("click",()=>{
    let alumno = prompt("Ingresa tu nombre para ver tu informacion por favor:")
    console.log(alumno);
    verClases(alumno);
})


btnInscribir.addEventListener("click",()=>{
    const curso= prompt("Ingresa al curso que deseas inscribirte:")
    inscripcionAlumno(curso);
})



/*document.addEventListener("DOMContentLoaded",() => {
    const btnAnimacion = document.getElementById("btn");
    const track = document.querySelector(".track");
    const view = document.querySelector(".contenedor_animacion");

    let indice = 0;
    const ancho = view.offsetWidth;
    console.log(ancho)

    btnAnimacion.addEventListener("click",() => {
        indice++;
        console.log(indice);
        track.style.transform = `translatex(-${indice * ancho}px)`;
        
    })
})*/

let registro = document.getElementById("form_registro");
emailjs.init("K5PQkuxczH0DhO8Yh");

const btnEnviar = document.getElementById("btnEnviar");

function enviarCorreo() {
    alert("hOLA");
    const data = new FormData(registro);
    const mensaje = data.get("mensaje")
    emailjs.send(
        "service_ywd144l",
        "template_y4sxdpk",
        {message: mensaje}
    ).then(
            ()=> alert("Correo enviado correctamente"),
            (err) => console.log("ERRORRR" + err)
    );
}

btnEnviar.addEventListener("click",() =>{
    enviarCorreo();
})





