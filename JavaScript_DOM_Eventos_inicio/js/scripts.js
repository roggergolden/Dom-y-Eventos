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

console.log(1);

window.addEventListener("load", function(){
    
console.log(2);

});

window.onload = function() {
    console.log(3)
}



console.log(5);



