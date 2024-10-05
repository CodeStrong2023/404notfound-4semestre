
function soyAsincrona(){
    setTimeout(function(miCallback){
        console.log('Hola, soy una función asíncrona');
    }, 1000);
}

console.log('Iniciando el proceso...');
soyAsincrona(function() {
    console.log('Terminando el proceso...');
});
