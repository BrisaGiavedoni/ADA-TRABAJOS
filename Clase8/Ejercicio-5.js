/* Saludo personalizado
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
texto y la función prompt(). Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos
• Utiliza prompt() para recibir el nombre del usuario.
• Muestra un mensaje utilizando concatenación de cadenas.
*/

const prompt = require('prompt-sync')(); //prompt-sync para poder usar prompt en Node.js

const sunombre = prompt('Ingrese su nombre: '); //Solicitar que ususario ingrese su nombre

console.log("Hola " + sunombre + " , eres bienvenido/a aqui");