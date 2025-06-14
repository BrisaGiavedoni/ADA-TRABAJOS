/* Ejercicio 2: Número mayor (función expresada) Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor */

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

let encontrarMayor = function(numero1,numero2) {
    if (numero1 > numero2) {
        console.log("El número mayor es: " + numero1);
    }   else if (numero2 > numero1) {
        console.log("El número mayor es: " + numero2);
    } else {
        console.log("Los números son iguales.");
    }
}   

encontrarMayor(numero1, numero2);
