// Spread operator (...) Nuevo operador de ECMAScript 6 (2015)
// Sintaxis simple para iterar arrays y objetos

let frutasConvencionales = ['pera','manzana','naranja'];
let frutasTropicales = ['piña','mango'];

let frutas = [...frutasConvencionales, ...frutasTropicales];
console.log(frutas);

// Rompe la referencia (como los arrays son objetos pues su paso es por referencia
// pero esto operador la rompe)

frutas[2] = 'plátano';
console.log(frutas);
console.log(frutasConvencionales);

// Desestructuring Nueva sintaxis para extraer el valor de objetos y arrays
// y asignar en un solo paso

// Para arrays

let puntuaciones = [10, 20, 30, 40, 50];

// let [puntuacion1, puntuacion2] = puntuaciones;

// Equivalente let puntuacion1 = puntuaciones[0] y sucesivamente

// console.log(puntuacion1);
// console.log(puntuacion2);

let [puntuacion1, puntuacion2, ...restoPuntuaciones] = puntuaciones;

console.log(restoPuntuaciones);

// Para objetos

let alumno = {
    nombre: 'Pilar',
    apellidos: 'López Pérez',
    edad: 40
}

let {edad, nombre} = alumno;

console.log(edad);
console.log(nombre);

let player = {
    name: 'Lionel',
    surname: 'Messi',
    team: 'PSG',
    goals: 0
}

const {name, surname, ...seasonData} = player;
console.log(seasonData);


