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

//find: Buscar "un solo" elemento en un array que cumpla una condición
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const encontrar = numeros.find(function (x) {
  x >= 5;
});
if (encontrar) {
  alert("Existe una coincidencia");
}

//filter: crear un nuevo array con todos los elementos que cumplan una condición
//usamos como referencia la constante numeros
const numerosPares = num.filter(function (x) {
  return x % 2 === 0;
});

// reduce: aplicar una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor
const precioTotal = numeros.reduce(function (acumulador, valorActual) {
  acumulador + valorActual;
});

// sort: ordenar los elementos de un array según una función de comparación
const numerosDesordenados = [5, 3, 8, 1, 4];
const numerosOrdenados = numerosDesordenados.sort(function (a, b) {
  return a - b; // Orden ascendente
});
// También se puede usar para ordenar objetos
const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 35 },
];
const personasOrdenadas = personas.sort(function (a, b) {
  return a.edad - b.edad; // Ordenar por edad
});

// every: verificar si todos los elementos del array cumplen una condición
const todosPares = numeros.every(function (x) {
  return x % 2 === 0;
});

// some: verificar si al menos un elemento del array cumple una condición
const alMenosUnPar = numeros.some(function (x) {
  return x % 2 === 0;
});

// includes: verificar si un array contiene un elemento específico
const contieneCinco = numeros.includes(5);

// indexOf: encontrar el índice de un elemento en un array
const indiceDeCinco = numeros.indexOf(5); //devolverá el índice del primer elemento que coincida con 5

// lastIndexOf: encontrar el último índice de un elemento en un array
const ultimoIndiceDeCinco = numeros.lastIndexOf(5); // devolverá el índice del último elemento que coincida con 5

// concat: combinar dos o más arrays en uno nuevo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = array1.concat(array2);

// slice: crear una copia superficial de una porción del array
const arrayOriginal = [1, 2, 3, 4, 5];
const arrayCopia = arrayOriginal.slice(1, 4); // Copia del índice 1 al 3 (sin incluir el 4)

// splice: cambiar el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos
const arraySplice = [1, 2, 3, 4, 5];
arraySplice.splice(2, 1, 6, 7); // Elimina el elemento en el índice 2 y agrega 6 y 7

// join: unir todos los elementos de un array en una cadena de texto
const arrayJoin = ["Hola", "mundo"];
const cadenaUnida = arrayJoin.join(" "); // "Hola mundo"

// reverse: invertir el orden de los elementos de un array
const arrayReverse = [1, 2, 3, 4, 5];
const arrayInvertido = arrayReverse.reverse(); // [5, 4, 3, 2, 1]

// fill: llenar todos los elementos de un array con un valor estático
const arrayFill = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// flat: aplanar un array multidimensional en uno unidimensional
const arrayMultidimensional = [1, [2, 3], [4, 5]];
const arrayAplanado = arrayMultidimensional.flat(); // [1, 2, 3, 4, 5]

// flatMap: primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array
const arrayFlatMap = [1, 2, 3].flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
