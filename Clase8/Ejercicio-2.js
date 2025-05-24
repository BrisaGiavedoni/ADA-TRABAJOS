/* Verificar si un número es positivo, negativo o cero
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
• Usa parseFloat() para convertir la entrada del usuario a un número.
*/

const prompt = require("prompt-sync")(); //prompt-sync para poder usar prompt en Node.js

let numero = parseFloat(prompt("Ingrese un número:")); //Solicitar numero al usuario

if (numero === 0) {
  console.log("El numero es cero"); // mostrar si el numero ingresado es igual a 0 
} else if (numero > 0) {
  console.log("El número es positivo"); //Mostrar si el numero ingresado es mayor a 0 (POSITIVO)
} else if (numero < 0) {
  console.log("el numero es negativo"); //Mostrar si el numero ingresado es menor a 0 (NEGATIVO)
} else {
  console.log("Por favor, ingrese un número."); // MOSTRAR SI LO QUE SE INGRESO NO ES UN NUMERO
}