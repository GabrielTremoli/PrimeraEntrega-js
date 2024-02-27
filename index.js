// Variables
let cantidadMonedas;
let ganado = false;

// Objetos
const tragamonedas = {
    simbolos: ['🍒', '🍊', '🍋', '🍇', '🍉'],
    resultado: [],
};

// Funciones esenciales
function solicitarMonedas() {
    do {
        cantidadMonedas = parseInt(prompt("💲Ingrese la cantidad de monedas (no más de 10):💲"));
    } while (isNaN(cantidadMonedas) || cantidadMonedas <= 0 || cantidadMonedas > 10);
}

function generarResultado() {
    tragamonedas.resultado = [];
    for (let i = 0; i < 3; i++) {
        const indiceAleatorio = Math.floor(Math.random() * tragamonedas.simbolos.length);
        tragamonedas.resultado.push(tragamonedas.simbolos[indiceAleatorio]);
    }
}

function mostrarResultado() {
    const mensaje = `🎰\n\n${tragamonedas.resultado.join(' | ')}\n\n¡Suerte!`;
    const aceptar = confirm(mensaje);
    return aceptar;
}

function jugarTragamonedas() {
    for (let i = 0; i < cantidadMonedas; i++) {
        generarResultado();
        const aceptar = mostrarResultado();

        if (!aceptar) {
            alert("Gracias por jugar. ¡Hasta la próxima!");
            break;
        }

        if (tragamonedas.resultado[0] === tragamonedas.resultado[1] && tragamonedas.resultado[1] === tragamonedas.resultado[2]) {
            alert("🤑¡Felicidades! ¡Has ganado!🤑");
            ganado = true;
            break;
        }
    }

    if (!ganado) {
        alert("No has tenido suerte 😢 ¡Inténtalo de nuevo!");
    }
}

// Lógica principal
solicitarMonedas();
jugarTragamonedas();
