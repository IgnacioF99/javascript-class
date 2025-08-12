// let inputField = document.getElementById("inputfield");

// console.log(inputField);

//Esta funcion se ejecuta cada vez que se cambia el valor del campo de input
//linea 9 en HTML
//En lugar de "input" podemos usar otros eventos como "change" o "keyup"
// inputField.addEventListener("input", (event) => {
//   console.log("El valor del campo cambio a: " + event.target.value);
// });

//Creamos un array de tickets
let tickets = [];
//Variable para id de ticket
let ticketId = 0;

function mostrarFormulario() {
  //Obtenemos el formulario/Mostramos el formulario
  document.getElementById("formulario").style.display = "block";
  //ocultamos el Filtro
  document.getElementById("seccionFiltro").style.display = "none";
}
function mostrarTodos() {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "none";
}
function mostrarFiltro() {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "block";
}

//Evento que se ejecuta cuando el DOM esta completamente cargado
//Esto asegura que el script se ejecute solo cuando el HTML este listo
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "none";

  document
    .getElementById("btnCrear")
    .addEventListener("click", mostrarFormulario());
  document.getElementById("btnTodos").addEventListener("click", mostrarTodos);
  document.getElementById("btnFiltro").addEventListener("click", mostrarFiltro);
});

//Funcion para crear un ticket
function crearTicket() {
  const cliente = document.getElementById("cliente");
  const problema = document.getElementById("problema");
  const ticket = {
    id: idCounter++,
    cliente: cliente,
    problema: problema,
    estado: "abierto",
  };
  tickets.push(ticket);
  // win + . (emojis)
  alert("✔ ticket creado");
  document.getElementById("ticketForm").reset(); // Resetea el formulario
}
