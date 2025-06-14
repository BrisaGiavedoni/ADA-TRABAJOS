/* Ejercicio 8:
 Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. */

const prompt = require('prompt-sync')();    

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

let convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}   
console.log("La temperatura en grados Fahrenheit es: " + convertirCelsiusAFahrenheit(celsius) + "°F");

