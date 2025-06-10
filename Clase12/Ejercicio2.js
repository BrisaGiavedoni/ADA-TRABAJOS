/*●	Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".
*/
const prompt = require('prompt-sync')();
let contraseña;

do {
  contraseña = prompt("Ingresa la contraseña:");
  if (contraseña !== "1234") {
    console.log("Contraseña incorrecta");
  }
} while (contraseña !== "1234");

console.log("¡Contraseña correcta!");

