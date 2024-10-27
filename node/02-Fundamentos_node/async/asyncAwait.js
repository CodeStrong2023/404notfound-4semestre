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
            console.log('Adios ' + nombre);
            //resolve(); // No es necesario pasar el nombre en la última función
            reject('Hay un error')
        }, 1000);
    });
}
//await Hola ("Ariel"); //Esto es una mala sintáxis

async function main() {
    await Hola("Ariel");
}

main();