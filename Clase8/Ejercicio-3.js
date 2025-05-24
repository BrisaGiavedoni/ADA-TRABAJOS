/* Suma de dos números ingresados por el usuario

Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
aritméticos. Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
• Utiliza prompt() para recibir los números.
• Utiliza parseFloat() para convertir las entradas a números.
• Almacena los resultados en variables adecuadas y muestra el resultado */

const prompt = require("prompt-sync")(); //prompt-sync para poder usar prompt en Node.js

let numero1 = parseFloat(prompt("Ingrese el primer numero:")); //Solicitar que se ingrese el primer numero

let numero2 = parseFloat(prompt("Ingrese el segundo numero:")); //Solicitar que se ingrese el segundo numero

const suma = numero1 + numero2 //Sumar ambos numeros ingresados

console.log("El resultado de la suma es:" + suma); //Mostrar resultado de suma
