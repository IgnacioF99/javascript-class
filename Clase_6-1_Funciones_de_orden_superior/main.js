//Abstraccion
// Funciones de orden superior
// Son funciones que reciben otras funciones como argumentos o retornan una función como resultado

const coche = {
  marca: "Ford",
  modelo: "Fiesta",
  anio: 2020,
  color: "Rojo",

  arrancar: function () {
    console.log("El coche está arrancando");
  },
  acelelar: function () {
    console.log("El coche está acelerando");
  },
  frenar: function () {
    console.log("El coche está frenando");
  },
};

const frutas = ["Manzana", "Pera", "Naranja", "Plátano"];

// forEach: Recorrer un array y ejecutar una función por cada elemento
frutas.forEach(function (x) {
  console.log(x.toUpperCase());
});

//map: Crear un nuevo array aplicando una función a cada elemento del array original
const num = [1, 2, 3, 4, 5];

const numCuadrados = num.map(function (x) {
  return x * x;
});
console.log(numCuadrados);
