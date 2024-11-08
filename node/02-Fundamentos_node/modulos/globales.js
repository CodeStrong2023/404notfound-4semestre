// this === global = true

// Mostrar algo en consola
// console.log();

// Mostrar un mensaje en forma de error
// console.error();

// Ejecutar un código después de un intervalo de tiempo
// setTimeout(() => {});

// Ejecutar un código en intervalo de tiempo
// setInterval(() => {});

// Da prioridad de ejecución a una función asincrónica
// setImmediate(() => {});

// console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola'); // Corregido: console.lohg -> console.log
    if (i === 3) {
        clearInterval(intervalo); // detenemos la función
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato');
});

// require();

console.log(__filename);

global.miVariable = 'mi variable global'; // Se establece la variable global
console.log(miVariable); // Se accede a la variable a través de global




