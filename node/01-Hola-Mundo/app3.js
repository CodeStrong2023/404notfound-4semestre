console.log('Inicio del programa'); // 1
setTimeout(() => {
    console.log('Primer Timeout'); // 5
}, 3000);  // 3000: estará 3 segundos disponible

setTimeout(() => {
    console.log('Segundo Timeout'); // 3
}, 0);

setTimeout(() => {
    console.log('Tercero Timeout'); // 4
}, 0);

console.log('Fin del programa'); // 2

// Síncrono, instrucciones no bloqueantes. Se maneja en una sincronía(Stack de procedimientos).