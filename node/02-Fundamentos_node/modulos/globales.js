// this === global = true

// Mostrar algo en consola
//console.log();

// Mostrar un mensaje en forma de error
//console.error();

// Ejecutar un código después de un intervalo de tiempo
//setTimeout(() => {});

// Ejecutar un código en intervalo de tiempo
//setInterval(() => {});

// Da prioridad de ejecución a una función asincrónica
//setImmediate(() => {});

//console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.lohg('Hola');
    if (i === 3) {
        clearInterval(intervalo); // detenemos la funcion
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato');
});

//require();

console.log(__filename);
