// querySelector 

const heading = document.querySelector( ".header__texto h2") // 0 o 1 elementos 
heading.textContent = "Nuevo Heading";

console.log(heading);


// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a")

enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("Nueva-clase");
// enlaces[0].classList.remove("navegación__enlace")

// Generar enlace con código de JavaScript

const nuevoEnlace = document.createElement("A")

//Agregar el href

nuevoEnlace.href = "nuevo-enlace.html";

//Agregar el texto

nuevoEnlace.textContent = "Tienda Virtual";

//Agregar la clase

nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// Eventos 

// console.log(1);

// window.addEventListener("load", function(){ // load espera a que se descargue el JS y los archivos del HTML estén listos
    
// console.log(2);

// });

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Sólo espera por el HTML, pero no espera en CSS o imagenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function(evento) {
//     console.log(evento)
// }

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();

//     //Validar un formulario

//     console.log("enviando formularios")
// });

//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto)

email.addEventListener('input', leerTexto)

mensaje.addEventListener('input', leerTexto)

// El evento de Submit

formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    //validar el formulario

    const { nombre, email, mensaje }  = datos;


    if( nombre === '' || email === '' || mensaje === '') {
        mostrarError('todos los campos son obligatorios')

        return; 
    }

    //Crear la otra alerta




    //Enviar Formulario

    console.log('Enviando formulario')
}) 

function leerTexto(e) {
    // console.log(e.target.value)

    datos[e.target.id] = e.target.value;
  
    // console.log(datos)
}

//Muestra un error en pantalla

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );
    

    // Desaparecer despues de 5 segundos

    setTimeout ( () => {
        error.remove();

    }, 5000);

}



