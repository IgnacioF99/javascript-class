//Modelo de negocio - informacion de como se organiza la empresa

//Control de Stock
/*
    modelo de informacion del producto =>
    necesito productos => lista de productos
    modelados de productos => funcion constructora
    inventario de productos => almacenar los productos


    abm
    funcion alta
    funcion baja
    funcin modifico

*/

let obj = {
  nombre: "producto",
  precio: 100,
  stock: 10,
};

const Producto = function (nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
};

let producto1 = new Producto("tecladO", 1500000, 25);
let producto2 = new Producto("mouse", 8000, 25);
let producto3 = new Producto("monitor", 500000, 10);

let lista = [producto1, producto2, producto3];

//Funcion para guardar los productos en el Storage
function guardarLista() {
  localStorage.setItem("productos", JSON.stringify(lista));
}

//===================================================
//ABM - Alta, Baja, Modificacion
//====================================================

function filtrarProductos() {
  let filtrarProducto = prompt("Ingrese que producto buscas:").toLowerCase();
  console.log(filtrarProducto);
  let resultado = lista.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtrarProducto)
  );
  if (resultado.length > 0) {
    console.log("Productos encontrados:");
    resultado.forEach((producto) => {
      console.log(
        `Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`
      );
    });
  } else {
    console.error("No se encontraron productos con esa palabra clave.");
  }
}

function agregarProducto() {
  let nombre = prompt("Ingrese el nombre del producto:");
  if (!nombre) {
    alert("El nombre del producto no puede estar vacío.");
    return;
  }

  // Validar si el nombre ya existe
  let existe = lista.find(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (existe) {
    alert("El producto ya existe en la lista.");
    return;
  }

  // Validar precio
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  if (isNaN(precio) || precio <= 0) {
    alert("El precio no es valido.");
    return;
  }

  // Validar stock
  let stock = parseInt(prompt("Ingrese la cantidad de stock:"));
  if (isNaN(stock) || stock < 0) {
    alert("El stock no es valido.");
    return;
  }

  // Crear nuevo producto y agregarlo a la lista
  let nuevoProducto = new Producto(nombre, precio, stock);
  lista.push(nuevoProducto);
  guardarLista();
  console.log(lista);
}
