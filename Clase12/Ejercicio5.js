/*Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)*/

const prompt = require('prompt-sync')();

let nombres = [];

for (let i = 0; i < 5; i++) {
  let nombre = prompt(`Ingresa el nombre #${i + 1}:`);
  nombres.push(nombre);
}

let buscarNombre= prompt("Ingresa un nombre a buscar: ");

let encontrado= false;

for(let i = 0; i < nombres.length; i++) {
  if (nombres[i] === buscarNombre) {
    encontrado = true;
    break; 
  }
}

if (encontrado) {
    console.log(`El nombre "${buscarNombre}" se encuentra en la lista.`);
}
 else {
    console.log(`El nombre "${buscarNombre}" no se encuentra en la lista.`);
}
