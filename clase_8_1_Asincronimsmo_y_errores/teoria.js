//💥Identificar modelos sincronicos y asincronicos de programacion
//💥Comprender ventajas y desventajas de cada modelo segun el contexto
//💥Comprender el funcionamiento del Call Stack y Event loop
//💥Aprender a Manipular Promesas en JS
//---------------------------------------------------------------------

/*
❗Programacion Sincronica
    En este modelo, nuestro programa funciona de manera lineal, ejecutano una accion
    y despues otra. Solo podemos realizar una tarea a la vez y cada tarea es bloqueante de la siguiente
    
❗Programacion Asincronica
   Este modelo permite que multiples tareas sucedan a la vez. Al comenzar una accion, nuestro programa
   sigue en ejecucion; y cuando la accion termina, nuestro programa es informado y consigue acceso al
   resultado correspondiente. 

🕐setTimeout: Es una funcion que permite realizar acciones asincronicamente. La funcion recibe dos parametros:
Una funcion callblack y un valor numerico que representa milisegundos.
  setTimeout(fn, time)
Asi, la funcion que pasamos por primer parametro se ejecuta luego de que transcurriera el tiempo definido en el segundo parametro. Por Ejemplo

🔽
setTimeout(()=> {
  console.log("Proceso asincronico")
}, 3000)
🔼

En modelo sincronico, esperariamos ver el proximo ejemplo en el siguiente orden:
1. "Inicia proceso"
2. "Mitad de proceso"(2 segundos)
3. "Fin proceso"

🔽
console.log("inicia proceso");

setTimeout(() => {
  console.log("Mitad de proceso");
}, 2000);

console.log("Fin proceso");
🔼

Sin embargo, la salida se produce de la siguiente forma:
prueba el codigo que esta en medio de las flechas
*/

//====================================================================

/*
❗Call Stack (PILA)
Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa.
Javascript es un lenguaje single threaded, o de un unico hilo, lo que significa
que tiene un unico stack o pila de ejecucion. De ahi que la ejecucion es implicitamente
sincronica.

Como es el proceso de Call Stack?
Cuando se esta a punto de ejecutar una funcion, esta es añadida al stack. Si la funcion
llama a la vez, a otra funcion, esta es agregada sobre la anterior:

🔽
function multiply(x, y){
  return x * y;
}

function printSquare(x){
  let s = multiply(x, x);
  console.log(s);
}

printSquare(5);
🔼

Es una lista de tareas de JS a ejecutar durante el programa. Cada nueva instruccion se
agrega en el orden que corresponde al stack y el motor de JS resuelve una a una.
*/

//====================================================================

/*
❗Event Loop
Muchas funciones asincronicas se ejecutan en un stack diferente. El event loop es la herramienta
que permite la sincronizacion entre nuestro call stack con estas tareas asincronicas que funcionan
en un thread aparte. Si el stack esta vacio, el Event Loop envia la primera funcion que este en
el call stack y comienza a ejecturase.
*/

//====================================================================

/*
❗SetInterval
Permite ejecutar funciones de manera reiterativa tras milisegundos indicados hasta que indiquemos
su detencion o se cierre la aplicacion

🔽
setInterval(()=>(
  console.log("Tic")
), 1000)
🔼

❗clearInterval y clearTimeout
En caso de querer remover un intervalo ultilizamos la funcion clearInterval().
y para detener un setTimeout() utilizamos clearTimeout().

*/