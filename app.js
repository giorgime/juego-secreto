let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numerDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numerDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeoSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeoSecreto();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInicales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeoSecreto();
    intentos = 1;
}
function reiniciarJuego(params) {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    condicionesInicales();
    //generar número aletorio
    //Indicar el número de intentos
    //deshabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesInicales();
