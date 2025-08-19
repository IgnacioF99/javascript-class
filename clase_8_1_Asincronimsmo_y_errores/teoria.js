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

*/
