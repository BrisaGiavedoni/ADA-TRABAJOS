/*Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.*/

const prompt = require("prompt-sync")();

let tuedad = parseFloat(prompt("Ingrese su edad:"));

if (tuedad >= 18) {
  console.log("Felicidades eres mayor de edad!!!");
} else {
  console.log("Aun eres menor de edad :c ");
}
