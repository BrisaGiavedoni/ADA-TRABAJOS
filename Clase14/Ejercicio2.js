/* Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio. */

const prompt = require('prompt-sync')();

let calificaciones = 0

for (let i = 1; i <= 5; i++) {
    let calificacion = parseFloat(prompt(`Introduce la calificación ${i}: `));
    calificaciones += calificacion;
}

const calcularPromedio = calificaciones => calificaciones / 5;

let promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);

