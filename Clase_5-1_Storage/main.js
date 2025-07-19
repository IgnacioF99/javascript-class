//Funciones Contructoras

//Creamos la funcion constructora Producto
//Esta funcion se utiliza para crear objetos de tipo Producto
function Producto(id, nombre, importe, stock) {
  this.id = id;
  this.nombre = nombre;
  this.importe = importe;
  this.stock = stock;
}

//Creamos un objeto de tipo Producto
//Utilizamos la funcion constructora Producto para crear un nuevo objeto
let producto1 = new Producto(1, "teclado", 15000, 25);
//Esto es igual a:
/*
  let producto1 = {
    id: 1,
    nombre: "teclado",
    importe: 15000,
    stock: 25
  }
*/
//Creamos otro objeto de tipo Producto
let producto2 = new Producto(2, "mouse", 8000, 25);
let producto3 = new Producto(3, "monitor", 50000, 10);

//Creamos una funcion para filtrar productos
//Esta funcion solicita al usuario una palabra clave y filtra los productos que contienen esa palabra en
let lista = [producto1, producto2, producto3];
//su nombre. Luego muestra los productos encontrados.
//Si no se encuentran productos, muestra un mensaje indicando que no se encontraron.
function filtrarProductos() {
  let palabraClave = prompt("Ingrese que producto buscas:");
  let resultado = lista.filter((producto) =>
    producto.nombre.includes(palabraClave)
  );
  if (resultado.length > 0) {
    console.log("Productos encontrados:");
    resultado.forEach((producto) => {
      console.log(
        `ID: ${producto.id}, Nombre: ${producto.nombre}, Importe: $${producto.importe}, Stock: ${producto.stock}`
      );
    });
  } else {
    console.log("No se encontraron productos con esa palabra clave.");
  }
}

//Creamos una funcion constructora Persona
function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function () {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  };
}

//Creamos un objeto de tipo Persona
let persona1 = new Persona("Juan", "Perez", 30);
let persona2 = new Persona("Ana", "Gomez", 25);

//STORAGE
//Hay 4 metodos para el uso de Storage:
//setItem: para guardar un dato
//getItem: para obtener un dato
//removeItem: para eliminar un dato
//clear: para eliminar todos los datos
//Los datos se guardan en formato string, por lo que si queremos guardar un objeto, debemos convertirlo a string utilizando JSON.stringify() y al obtenerlo, debemos convertirlo de nuevo a objeto utilizando JSON.parse()

localStorage.setItem("miclave", "mi valor");
localStorage.clear(); //Elimina todos los datos del localStorage

localStorage.setItem("apellido", "Flores");
localStorage.removeItem("apellido"); //Elimina el dato con la clave "apellido"

//JSON.stringify() convierte un objeto a una cadena JSON
//JSON.parse() convierte una cadena JSON a un objeto

const alumno = {
  nombre: "Carlos",
  apellido: "Lopez",
  activo: true,
};

const alumnoJSON = JSON.stringify(alumno); // Convierte el objeto a una cadena JSON
localStorage.setItem("alumno", alumnoJSON); // Guarda el objeto en el localStorage
