/* Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.*/

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Introduce tu edad: "));

const clasificarEdad = edad => {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if ( edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 59) {
        return "Adulto";
    } else if (edad >= 60) {
        return "Adulto mayor";
    } else {
        return "Edad inválida";
    }
};

let clasificacion = clasificarEdad(edad);
console.log(`Clasificación: ${clasificacion}`);   