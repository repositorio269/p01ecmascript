// Funciones flecha en JS (ECMAScript 6)
// Nueva sintaxis para funciones de expresión y anónimas

// const cubo = (a) => {
//     return a * a * a;
// }

// Si solo tiene un parámetro se pueden aliviar los paréntesis
// Si solo tiene una línea de código en el cuerpo se pueden aliviar las llaves
// Si solo tiene una línea el return será implícito

const cubo = a => a * a * a;

console.log(cubo(5))

const printMensaje = _ => console.log('Hola'); // Sintaxis poco utilizada

printMensaje();

// La otra ventaja de las flechas es que no tiene referencia this

class Mensaje {
    nombre = '';
    constructor(nombre) {
        this.nombre = nombre;
    }

    getMensaje() {
        // setTimeout(function() { // La función tiene su propio this
        //     console.log('Hola ' + this.nombre);
        // }, 1000)
        setTimeout(() => { // La función flecha no tiene su propio this
            console.log('Hola ' + this.nombre);
        }, 1000)
    }

}

let mensaje1 = new Mensaje('Lucía');
mensaje1.getMensaje();

