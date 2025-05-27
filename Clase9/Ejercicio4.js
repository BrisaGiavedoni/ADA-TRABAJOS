/*Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.*/

const prompt = require("prompt-sync")();

const sunombre = prompt("Ingrese su nombre: ");

let minombre = "Brisa";

if (sunombre === minombre) {
  console.log("Su nombre es igual al mio");
} else {
  console.log("Los nombres no son iguales");
}
