//Document Objet Model (DOM) - Clase 7.1

let titulo = document.getElementById("titulo");
titulo.innerHTML = "Hola mundo desde el DOM!";
//el innertHTML significa que se va a modificar el contenido del elemento HTML
//elemento => <H1> => contenido => Hola mundo desde el DOM!

//titulo.innerHTML.remove(); //remueve el elemento del DOM
// let nombre = prompt("Ingrese usuario: ");
// if (nombre == "javier") {
//   titulo.innerHTML = "Bienvenido " + nombre;
// } else {
//   titulo.innerHTML = "bienenido invitado";
// }

let parrafo = document.getElementsByClassName("colortexto");
parrafo[1].innerHTML = `<h1>Hola soy yo</h1>`;

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  boton.innerHTML = "Hola desde el boton";
});

//Creacion de elementos
//Crear nodo de tipo elemento, etiqueta p
let parrafoNuevo = document.createElement("p");
//Agregarle contenido
parrafoNuevo.innerHTML = "<h1>Hello there</h1>";
//agregar el nodo Element como hijo de body
document.body.append(parrafoNuevo);

//Eliminar Elementos
//Se puede eliminar nodos existentes, el metodo remove() permite eliminar un nodo seleccionado del DOM.
parrafoNuevo.remove();
//Tambien se puede eliminar elementos de clases por su indice
//ej:
//let paises = comuent.getElementsByClassName("paises");
//paises[1].remove();
//Remueve el segundo elemento de la clase paises

//Obtener datos de Inputs
document.getElementById("nombre").value = "Homero"; //modificamos
document.getElementById("edad").value = 40;

//Creando opciones desde un Array
//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la informacion a agregar
let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];
//Iteramos el array con for...of
for (const persona of personas) {
  //Creamos un nodo <li> y agregamos al padre en cada ciclo
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.append(li);
}

//====================================================
//Plantillas de texto
//Plantillas literales de innerHTML
//la plantillas son un medio para incluir variables en la estructura HTML de nodos nuevos o existentes, modificando el innerHTML
let producto = {
  id: 1,
  nombre: "Arroz",
  precio: 125,
};
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `
<h3> ID: ${producto.id}</h3>
<p> Producto: ${producto.nombre}</p>
<b> Precio: ${producto.precio}</b>
`;
//Agregamos el contenedor al body
document.body.append(contenedor);

//Ejemplo aplicando elementos desde objetos
const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Aceite", precio: 315 },
  { id: 3, nombre: "Fideos", precio: 100 },
  { id: 4, nombre: "Caballa", precio: 600 },
];
for (const producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `
  <h3> ID: ${producto.id}</h3>
  <p> Producto: ${producto.nombre}</p>
  <b> Precio: ${producto.precio}</b>
  `;
  document.body.append(contenedor);
}

//====================================================

//QUERY SELECTOR
//El metodo querySelector() permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores CSS
//linea 28 => 30 en el HTML
//puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
let parrafoQuery = document.querySelector("#contenedor p");
//Selecciona solo el contenedor por id con #
let contenedorQuery = document.querySelector("#contenedor");
// o por clase
parrafoQuery = document.querySelector(".texto");
//QuerySelector solo retorna el primer elemento que coincida con el parametro de busqueda, Si quiero obtener una
//una coleccion de elementos puedo utilizar el metodo querySelectorAll() siguiendo el mismo comportamiento

//====================================================

//EVENTOS EN JS
//linea 32 en HTML
//Opcion 1
let boton2 = document.getElementById("btnPrincipal");
boton2.addEventListener("click", () => {
  alert("Tocaste el boton");
});

//Opcion 2
// let boton3 = document.getElementById("btnPrincipal");
// boton3.onclick = () => {
//   alert("Tocaste el boton con onclick");
// };

//Aunque las dos opciones son validas, la primera es la recomendada ya que permite agregar varios eventos al mismo elemento sin sobreescribir los anteriores.

//linea 35 en HTML
let contenedorRojo = document.getElementById("container");

contenedorRojo.addEventListener("mousemove", (event) => {
  console.log("cordenada Y = " + event.clientY); //coordenada Y del mouse
  console.log("Cordenada X = " + event.clientX); //coordenada X del mouse
});
