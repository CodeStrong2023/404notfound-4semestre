// Clase Personaje
class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.vidas = 3;
        this.ataque = null;
    }

    seleccionarAtaque(tipoDeAtaque) {
        this.ataque = tipoDeAtaque;
    }

    recibirDanio() {
        if (this.vidas > 0) {  
            this.vidas--;
        }
    }

    estaVivo() {
        return this.vidas > 0;
    }
}

// Variables globales
let jugador = null;
let enemigo = null;


function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = "none";

    document.getElementById("reglas-del-juego").style.display = "none";
    document.getElementById('boton-reglas').addEventListener('click', mostrarReglas);

    document.getElementById('boton-jugar').style.display = 'none';
    document.getElementById('seleccionar-personaje').style.display = 'block';

    // Desactivar los botones de ataque inicialmente
    document.getElementById('boton-punio').disabled = true;
    document.getElementById('boton-patada').disabled = true;
    document.getElementById('boton-barrida').disabled = true;

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', () => {
        jugador.seleccionarAtaque('Punio');
        combate();
    });

    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', () => {
        jugador.seleccionarAtaque('Patada');
        combate();
    });

    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', () => {
        jugador.seleccionarAtaque('Barrida');
        combate();
    });

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}


function mostrarReglas() {
    document.getElementById("reglas-del-juego").style.display = "block";
    document.getElementById('boton-jugar').style.display = 'block';
    document.getElementById('boton-reglas').style.display = 'none';
    document.getElementById('seleccionar-personaje').style.display = 'none';
    document.getElementById('boton-jugar').addEventListener('click', seleccionarPersonajeJugador);
}


function seleccionarPersonajeJugador() {
    let personajes = document.querySelectorAll('.opciones-personaje img');
    personajes.forEach(p => p.addEventListener('click', () => seleccionarPersonaje(p.alt)));

    // Mostrar mensaje si no hay un personaje seleccionado
    if (!jugador) {
        alert('Debes seleccionar un personaje antes de continuar.');
        return; // Detiene la ejecución si no se ha seleccionado un personaje
    }

    document.getElementById('seleccionar-personaje').style.display = 'none';
    document.getElementById('seleccionar-ataque').style.display = 'block';
}


function seleccionarPersonaje(personajeNombre) {
    jugador = new Personaje(personajeNombre);
    document.getElementById('personaje-jugador').innerText = personajeNombre;

    document.getElementById('boton-punio').disabled = false;
    document.getElementById('boton-patada').disabled = false;
    document.getElementById('boton-barrida').disabled = false;

    seleccionarPersonajeEnemigo();
}


function seleccionarPersonajeEnemigo() {
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph','zokka','appa'];
    let enemigoNombre = personajes[aleatorio(0, personajes.length - 1)];
    enemigo = new Personaje(enemigoNombre);

    document.getElementById('personaje-enemigo').innerText = enemigoNombre;
}


function combate() {
    if (!jugador || !enemigo) {
        alert('Debe seleccionar un personaje primero.');
        return;
    }

    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    let ataques = ['Punio', 'Patada', 'Barrida'];
    enemigo.seleccionarAtaque(ataques[aleatorio(0, 2)]);

    if (jugador.ataque === enemigo.ataque) {
        crearMensaje('Empate');
    } else if (
        (jugador.ataque === 'Punio' && enemigo.ataque === 'Barrida') ||
        (jugador.ataque === 'Patada' && enemigo.ataque === 'Punio') ||
        (jugador.ataque === 'Barrida' && enemigo.ataque === 'Patada')
    ) {
        crearMensaje('Ganaste');
        enemigo.recibirDanio();
        spanVidasEnemigo.innerHTML = enemigo.vidas;
    } else {
        crearMensaje('Perdiste');
        jugador.recibirDanio();
        spanVidasJugador.innerHTML = jugador.vidas;
    }

    revisarVidas();
}


function revisarVidas() {
    if (!enemigo.estaVivo()) {
        usuarioGano();
    } else if (!jugador.estaVivo()) {
        usuarioPerdio();
    }
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu personaje atacó con ${jugador.ataque}, el personaje enemigo atacó con ${enemigo.ataque}. ${resultado}`;
    sectionMensaje.appendChild(parrafo);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
    location.reload();
}

// Popup de derrota
function usuarioPerdio() {
    var popup = document.createElement('div');
    popup.style.position 