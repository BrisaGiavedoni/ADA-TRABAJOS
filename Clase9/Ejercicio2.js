/*Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.*/

const prompt = require("prompt-sync")();

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 50;

let numero = parseFloat(prompt("Ingrese un número:"));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log(`El número ${numero} está dentro del rango.`);
} else {
  console.log(`El número ${numero} está fuera del rango.`);
}
