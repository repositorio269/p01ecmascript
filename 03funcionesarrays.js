// Métodos o funciones de alto nivel (no exhuastivo) para array desde ECMAScript 6

let alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6, apto: null},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7, apto: null},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 3.6, apto: null},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuacion: 6.7, apto: null}, // trailing comma
]

// forEach
// Por cada elemento del array ejecuta una función callback que recibe como
// argumento el elemento y el índice del mes
/* <array>.forEach((elemento, índice) => {
    // Código a ejecutar con cada elemento ó índice
}) */

let numeroAlumnosAptos = 0;

alumnos.forEach((alumno, i) => {
    if (alumno.puntuacion >= 5) {
        alumno.apto = true;
        numeroAlumnosAptos++;
    } else {
        alumno.apto = false;
    }
})

console.log(alumnos);
console.log(numeroAlumnosAptos);

// Método map
// Idem anterior pero usa return para devolver en un array el 
// resultado de la ejecución de cada callback

const listadoNombresAlumnos = alumnos.map((alumno, i) => {
    // ...
    return `${i + 1}.- ${alumno.nombre} ${alumno.apellidos}`;
})

console.log(listadoNombresAlumnos);

// Método filter 
// Idem map pero devuelve los elementos que cumplan una condición

const alumnosNoAptos = alumnos.filter(alumno => alumno.puntuacion < 5);