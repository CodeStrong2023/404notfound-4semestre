// La palabra async no es necesaria en las funciones, porque ya son asincronas
// Igual proyectan una sincronia visual
async function Hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre); // Resolvemos con el nombre para pasarlo a las siguientes promesas
        }, 1000);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla');
            resolve(nombre); // Pasamos el nombre a la siguiente promesa
        }, 1000);
    });
}



function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            // Validamos el error o aprobación
            console.log('Adios ' + nombre);
            //resolve(); // No es necesario pasar el nombre en la última función
            reject('Hay un error')
        }, 1000);
    });
}
//await Hola ("Ariel"); //Esto es una mala sintáxis
// await solo es valido dentro de una función asincrona
async function main() {
    let nombre = await hola("Ariel");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
}

console.log('Empezamos el proceso...')
main();
console.log('Esta va a ser la segunda instrucción')

//Código en inglés
//Es asincrono y retorna una promesa
function sayHello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello " + name);
            resolve(name);
        }, 1000);
    });
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla bla");
            resolve(name);
        }, 1000);
    });
}

function sayBye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Goodbye" + name);
            resolve(name);
        }, 1000);
    });
}

async function conversation(name) {
    console.log('Code in english')
    console.log("Starting async process...");
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log("Process completed");
}

conversation("Ariel");