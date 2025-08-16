function calcularSalud(nombre, edad, peso, altura) {
  if (edad < 0 || peso <= 0 || altura <= 0) {
    return `<p class="error">Datos inválidos. Por favor, ingrese valores positivos y válidos.</p>`;
  }

  let imc = peso / (altura * altura);
  let salud;

  if (imc < 18.5) {
    salud = "Bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    salud = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    salud = "Sobrepeso";
  } else {
    salud = "Obesidad";
  }

  return `<p>Estimado <span>${nombre}</span> su indice de IMC es : ${imc}, por lo tanto su estado de salud es <span>${salud}</span>.</p>`;
  //return "Edad:" + edad + ", IMC: " + imc.toFixed(2) + ", Salud: " + salud;
}

let nombre;
let edad;
let peso;
let altura;
let mensajeDeError = ``;

function obtenerDatos() {
  nombre = document.getElementById("nombre").value;
  edad = obtenerEdad();
  peso = obtenerPeso();
  altura = obtenerAltura();
  let resultado = calcularSalud(nombre, edad, peso, altura);
  document.getElementById("IMC").innerHTML = resultado + mensajeDeError;
  console.log(resultado);
}

function obtenerEdad() {
  edad = document.getElementById("edad").value;
  if (isNaN(edad) || edad < 0 || edad > 120) {
    mensajeDeError += `<p class="error">Edad inválida. Por favor, ingrese un número entre 0 y 120.</p>`;
  }
  return edad;
}

function obtenerPeso() {
  peso = parseFloat(document.getElementById("peso").value);
  if (isNaN(peso) || peso <= 0) {
    mensajeDeError += `<p class="error">Peso inválido. Por favor, ingrese un número positivo.</p>`;
  }
  return peso;
}

function obtenerAltura() {
  altura = parseFloat(document.getElementById("altura").value);
  if (isNaN(altura) || altura <= 0 || altura > 3) {
    mensajeDeError += `<p class="error">Altura inválida. Por favor, ingrese un número positivo menor o igual a 3 metros.</p>`;
  }
  return altura;
}

//obtenerDatos();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formIMC");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario
    obtenerDatos();
  });
});
