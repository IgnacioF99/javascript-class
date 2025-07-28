/*
PASO A PASO DEL GESTOR DE TICKE

# Crear un array vacio donde vamos a meter todos los tickets
cada ticket va a ser un objeto con propiedades: id, nombre, problema, estado

# necesito una variable que me ayude a incrementar el id de manera automatica

# Crear una funcion que me permita crear un ticket con valor unico e incrementable

# Crear una funcion que muestre el menu con las opciones:
{
 1. Crear ticket{
    1. ingresar nombre
    2. ingresar problema
    }
 2. ver tickets{
    1. listar todos los tickets
    2. listar tickets por estado (abierto, cerrado, en proceso)
    3. listar tickets por id
    4. listar tickets por nombre
    }
 3. actualizar ticket{
    1. ingresar id del ticket a actualizar
    }
}
# Funcion para generar ticket:
-pedirle los datos al usuario
-crear un objeto con los datos
-agregamos el objeto al array
-mostramos un alert que diga que el ticket se ha creado correctamente
# Funcion para ver tickets:
-recorrer el array con un forEach/map
-armar un string para mostrar los datos
-mostrar el resultado
# Funcion para filtrar tickets por estados (abierto, cerrado)
- pedir al usuario el estado que quiere ver
- filtrar el array
- mostrar los tickets
# Funcion para cerrar ticket:
- pedir el id del ticket que quiere cerrar
- buscarlo con un find
- si existe y esta abierto, pedir confirmacion para cerrarlo => si acepta, cambiar el estado del ticket


# Crear un bucle while que repita el menu hasta que el usuario decida salir
dentro del bucle, segun lo que elija el usuario, deberiamos llamar a la funcion correspondiente
*/

let tickets = [];

let idCounter = 1;

function mostrarMenu() {
  return prompt(
    "Gestor de tickets\n\n" +
      "1.Crear ticket\n\n" +
      "2.Ver ticket\n\n" +
      "3.filtrar ticket\n\n" +
      "4.Cerrar ticket\n\n" +
      "4.salir\n\n"
  );
}

//Bucle principal
let salir = false;
while (!salir) {
  let opcion = mostrarMenu();
  switch (opcion) {
    case "1":
      crearTicket();
      break;
    case "2":
      verTicket();
      break;
    case "3":
      filtrarPorEstado();
      break;
    case "4":
      cerrarTicket();
      break;
    case "5":
      salir = confirm("Estas seguro que quieres salir?");
      break;
    default:
      alert("Opción no válida, por favor intente de nuevo.");
  }
}

//Crear ticket

function crearTicket() {
  const nombre = prompt("Nombre del usuario:");
  const problema = prompt("Descripción del problema:");
  const ticket = {
    id: idCounter++,
    nombre: nombre,
    problema: problema,
    estado: "abierto",
  };
  tickets.push(ticket);
  // win + . (emojis)
  alert("✔ ticket creado");
}

function verTicket(lista) {
  if (lista.length === 0) {
    alert("No hay tickets para mostrar.");
    return;
  }
  let mensaje = "L lista de tickets: \n\n";
  lista.forEach((ticket) => {
    mensaje += `ID: ${ticket.id}, - Usuario: ${ticket.nombre} - Descripcion: ${ticket.problema} - Estado: ${ticket.estado} \n`;
  });
}

function cerrarTicket() {
  const id = parseInt(prompt("Ingrese el Id del ticket a cerrar:"));
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
  const estado = prompt("Que estado quiere ver? (abierto / cerrado");
  if (estado !== "abierto" && estado !== "cerrado") {
    alert("estado invalido");
    return;
  } else if (estado === "abierto" || estado === "cerrado") {
    const ticketsFiltrados = tickets.filter(
      (ticket) => ticket.estado === estado
    );
    verTicket(ticketsFiltrados);
    return;
  }
}
