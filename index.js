function jugarTragamonedas() {
    let cantidadMonedas;
    do {
        cantidadMonedas = parseInt(prompt("💲Ingrese la cantidad de monedas (no más de 10):💲"));
    } while (isNaN(cantidadMonedas) || cantidadMonedas <= 0 || cantidadMonedas > 10);
    let ganado = false;
    for (let i = 0; i < cantidadMonedas; i++) {
        const simbolos = ['🍒', '🍊', '🍋', '🍇', '🍉'];

        const resultado = [];
        for (let j = 0; j < 3; j++) {
            const indiceAleatorio = Math.floor(Math.random() * simbolos.length);
            resultado.push(simbolos[indiceAleatorio]);
        }


        const mensaje = `🎰\n\n${resultado.join(' | ')}\n\n¡Suerte!`;
        const aceptar = confirm(mensaje);

        if (!aceptar) {
            alert("Gracias por jugar. ¡Hasta la próxima!");
            break;
        }


        if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
            alert("🤑¡Felicidades! ¡Has ganado!🤑");
            ganado = true;
            break;
        }
    }


    if (!ganado) {
        alert("No has tenido suerte 😢 ¡Inténtalo de nuevo!");
    }
}

jugarTragamonedas();