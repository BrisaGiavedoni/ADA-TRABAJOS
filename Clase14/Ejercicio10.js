/* Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente). */

const prompt = require('prompt-sync')();

let floresFavoritas = [];

for (let i = 0; i < 3; i++) {
    let flor = prompt(`Introduce tus flores favoritas, # ${i + 1}: `);
    floresFavoritas[i] = flor; 
}

let florEspecifica = prompt("¿Cuál es tu flor favorita?: ");
let contador = 0;
for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i].toLowerCase() === florEspecifica.toLowerCase()) {
        contador++;
    }
}   

console.log(`Tu flor favorita "${florEspecifica}" se mencionó ${contador} veces entre tus flores favoritas.`);

