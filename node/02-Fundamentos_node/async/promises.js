function Hola(nombre, miCallback){
    setTimeout(function() {
        console.log('Hola'+nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log('Adios' + nombre);
            resolve();
        }, 1000);
    });
}

//Llamamos a la función
console.log('Iniciando el proceso...');
Hola('Ariel')
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso');
    });