let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;
let numeroMaxIntentos = 5;


function asignarElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if( numeroUsuario === numeroSecreto){
        asignarElemento(`p`,`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? "intento" : "intentos"}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    }else{
        // El usuario no acerto
        if(numeroSecreto>numeroUsuario){
            asignarElemento(`p`,`El numero secreto es mayor`);
        }else{
            asignarElemento(`p`,`El numero secreto es menor`);
        }
    if(numeroIntentos == numeroMaxIntentos){
        asignarElemento(`p`, `Se te acabaron los intentos`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
        listaNumeros = []
        }
    numeroIntentos++;
    
    limpiarCaja();
    }
    return;

}


reseteoIncial();

function limpiarCaja(){
    let valorCaja = document.querySelector(`#valorUsuario`);
    valorCaja.value = ``;
}


function generarNumeroS() {
     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo+1);
    // si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumeros);

    if(listaNumeros.length == numeroMaximo){
        asignarElemento(`p`, `Ya todos los numeros fueron sorteados`);
    
    
    }else{

            if(listaNumeros.includes(numeroGenerado)){
            return generarNumeroS();

            } else{
                listaNumeros.push(numeroGenerado);
                return numeroGenerado;
         }
    }
}

function reseteoIncial(){
    asignarElemento(`h1`, `Juego del numero secreto`)
    asignarElemento(`p`,`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroIntentos = 1;
    numeroSecreto = generarNumeroS();
}

function iniciarJuego(){
    // Limpiar caja
    limpiarCaja();
    // Indicar el el intervalo de numeros nuevamente
    reseteoIncial();
    // Generar el numero aleatorio
    // Deshabilitar el boton de nuevo juego
    // inicializar el numero de intentos 
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}

