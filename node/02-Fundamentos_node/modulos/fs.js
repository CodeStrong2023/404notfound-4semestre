const fs = require('fs');

// Primero leemos el archivo.txt
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        cb(data.toString());
    })
}


// Segundo escribimos el archivo1.txt crandolo.
function escribir(ruta, contenido) {
    fs.writeFile(ruta, contenido, function(err){
        if (err) {
            console.log("No se ha podido escribir", err);
        } else {
            console.log("Se ha escrito correctamente");
        }
    })
}

// Tercero eliminamos el archivo1.txt.
function borrar(ruta, cb) {
    fs.unlink(ruta, cb); // Elimina de forma asincrona.
}

borrar(`${__dirname}/archivo1.txt`, console.log);

//escribir(`${__dirname}/archivo1.txt`, "Reescribimos el archivo", console.log);
//leer('${__dirname}/archivo1.txt', console.log);// Sintaxis ES6