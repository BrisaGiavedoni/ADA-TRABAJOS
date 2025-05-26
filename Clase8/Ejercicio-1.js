/*Calcular el doble de un número
En este ejercicio, practicarás el uso de variables y operadores aritméticos. 
Debes escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número
*/

const prompt = require("prompt-sync")(); //prompt-sync para poder usar prompt en Node.js

let numero1 = parseFloat(prompt("Ingrese un número:")); //Solicitar numero al usuario

let doble = numero1 * 2; //Una vez que el usuario ingrese un numero calcular el doble de ese número

console.log("El doble de " + numero1 + " sería: " + doble); // Mostrar el resultado 
