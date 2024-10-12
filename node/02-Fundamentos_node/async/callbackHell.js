// Callbacks
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
function adios(nombre, otroCallback) {
    setTimeout(function(){
        console.log('Adios' + nombre);
        otroCallback();
    }, 1500)
}

// --Proceso Principal
console.log('Iniciando el proceso...');
Hola('Carlos',function() {
    adios('Carlos', function(){
        console.log('Terminando el proceso...');
    })
});
