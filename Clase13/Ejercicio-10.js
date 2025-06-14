/* Ejercicio 10:
Factorial de un número (Ejercicio entrevista) Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.

Formula factorial:
n!= n * (n-1) * * ... * 1

*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));

let calcularFactorial = function(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log("El factorial de " + numero + " es: " + calcularFactorial(numero));


