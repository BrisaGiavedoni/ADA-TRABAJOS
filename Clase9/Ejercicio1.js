/* Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.*/

const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Ingrese un número:"));
let numero2 = parseFloat(prompt("Ingrese otro número:"));

if (numero1 === numero2) {
  console.log("los numeros son iguales");
} else if (numero1 > numero2) {
  console.log("el numero mayor es " + numero1);
} else {
  console.log("el numero mayor es" + numero2);
}
