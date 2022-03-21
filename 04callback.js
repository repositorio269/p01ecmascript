// Sintaxis de una callback
// En JS podemos pasar funciones como argumentos a otra función

const setMensaje = (nombre, callbackMensaje) => {
    // 
    callbackMensaje(nombre); // Las librerías que usan callback tienen la invocación
                            // de la función que será pasada como argumento
}

// ¿Como implementamos funciones o métodos que usen callback?

setMensaje('Laura', nombre => {
    console.log('Hola ' + nombre);
})

setMensaje('Jhon', nombre => {
    console.log('Hello ' + nombre);
})


// Manejo de asincronía en JS con métodos o funciones que usen callbacks

const cuentaAtras = (segundos, callbackMostrarSegundos) => {
    let timer = setInterval(() => { // Usamos setInterval para simular asincronía
        let error;
        if(typeof segundos !== 'number') {
            error = 'El primer argumento debe ser numérico';
            clearInterval(timer);
        }
        callbackMostrarSegundos(segundos, error);
        segundos--;
        if(segundos === 0) {
            clearInterval(timer);
        }
    }, 1000)
} 

cuentaAtras(10, (seg, err) => {
    if(err) {
       console.log(err); 
    } else {
        console.log('Quedan ' + seg + ' segundos')
    }
});

