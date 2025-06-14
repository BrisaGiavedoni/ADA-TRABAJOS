/* Ejercicio 4: Número par o impar 
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));

function esPar(numero) {
   let resultado = (numero % 2 === 0) ? "Es par" : "Es impar";
   return resultado;
}	

console.log(esPar(numero));