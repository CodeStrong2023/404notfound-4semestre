async function Hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre); // Resolvemos con el nombre para pasarlo a las siguientes promesas
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla');
            resolve(nombre); // Pasamos el nombre a la siguiente promesa
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            // Puedes descomentar la línea resolve si quieres que no dé error.
            resolve(); // No es necesario pasar el nombre en la última función
            // reject('Hay un error') // Comentar o eliminar esta línea si no quieres generar un error
        }, 1000);
    });
}

// Llamamos a la función usando async/await
async function main() {
    try {
        console.log('Iniciando el proceso...');
        let nombre = await Hola('Ariel');
        await hablar(nombre);
        await hablar(nombre);
        await hablar(nombre);
        await adios(nombre);
        console.log('Terminando el proceso');
    } catch (error) {
        console.log('Ha habido un error');
        console.log(error);
    }
}

main();
