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

//Funcion para crear un ticket
function crearTicket() {
  const cliente = document.getElementById("cliente").value;
  const problema = document.getElementById("problema").value;
  const ticket = {
    id: ticketId++,
    cliente: cliente,
    problema: problema,
    estado: "abierto",
  };
  tickets.push(ticket);
  // win + . (emojis)
  alert("✔ ticket creado");
  document.getElementById("ticketForm").reset(); // Resetea el formulario
}

//Funcion para ver los tickets
function mostrarTickets(lista) {
  const listaTickets = document.getElementById("listaTickets");
  if (lista.length === 0) {
    listaTickets.innerHTML = "<h3>No existe ningun tickets</h3>";
    return;
  }
  let mensaje = "<h3>Lista de tickets: </h3>";
  lista.forEach((ticket) => {
    mensaje += `<div>
                  <p><strong>ID: </strong> ${ticket.id}</p>
                  <p><strong>Cliente: </strong> ${ticket.cliente}</p>
                  <p><strong>Problema: </strong> ${ticket.problema}</p>
                  <p><strong>Estado: </strong> ${ticket.estado}</p>
                  ${
                    ticket.estado === "abierto"
                      ? `<button class="btnCerrar" data-id="${ticket.id}">Cerrar Ticket</button>`
                      : `<span class="cerrado">Ticket Cerrado</span>`
                  }
                  <hr>
                </div>`;
  });
  listaTickets.innerHTML = mensaje;

  const btnCerrar = document.querySelectorAll(".btnCerrar");
  const botonesCerrar = document.querySelectorAll(".btnCerrar");
  botonesCerrar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.getAttribute("data-id"));
      cerrarTicket(id);
    });
  });
}

//Funcion para cerrar un ticket
function cerrarTicket(id) {
  const ticket = tickets.find((ticket) => ticket.id === id);
  if (!ticket) {
    alert("Ticket no encontrado.");
    return;
  } else if (ticket.estado === "cerrado") {
    alert("El ticket ya está cerrado.");
    return;
  }
  const confirmar = confirm("queres cerrar el ticket?");
  if (confirmar) {
    ticket.estado = "cerrado";
    alert("ticket cerrado.");
  }
  return;
}

function filtrarPorEstado() {
  const btnEstado = document.getElementById("btnAplicarFiltro");
  btnEstado.addEventListener("click", () => {
    const estado = document.getElementById("filtroEstado").value;
    filtrarTickets(estado);
    console.log(estado);
  });
}
function filtrarTickets(estado) {
  if (estado !== "abierto" && estado !== "cerrado") {
    alert("estado invalido");
    return;
  } else if (estado === "abierto" || estado === "cerrado") {
    const ticketsFiltrados = tickets.filter(
      (ticket) => ticket.estado === estado
    );
    mostrarTickets(ticketsFiltrados);
    return;
  }
}

function mostrarFormulario() {
  //Obtenemos el formulario/Mostramos el formulario
  document.getElementById("formularioCrear").style.display = "block";
  //ocultamos el Filtro
  document.getElementById("seccionFiltro").style.display = "none";
  document.getElementById("listaTickets").style.display = "none"; // Resetea el formulario
}
function mostrarTodos() {
  document.getElementById("listaTickets").style.display = "block";
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "none";
  mostrarTickets(tickets);
}
function mostrarFiltro() {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "block";
  document.getElementById("listaTickets").style.display = "block";
  filtrarPorEstado();
}

//Evento que se ejecuta cuando el DOM esta completamente cargado
//Esto asegura que el script se ejecute solo cuando el HTML este listo
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "none";

  document
    .getElementById("btnCrear")
    .addEventListener("click", mostrarFormulario);
  document.getElementById("btnTodos").addEventListener("click", mostrarTodos);
  document.getElementById("btnFiltro").addEventListener("click", mostrarFiltro);
});

document.getElementById("ticketForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  //Obtenemos los valores de los campos del formulario
  confirm("¿Estás seguro de crear un ticket?");
  crearTicket();
});
