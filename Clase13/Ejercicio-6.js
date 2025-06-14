/* Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos. */

const prompt = require('prompt-sync')();

let horas = parseFloat(prompt("Ingrese el número de horas: "));

function convertirHorasAMinutos (horas) {
    let minutos = horas * 60;
    return minutos; 
}

 console.log("El total de minutos es: " + convertirHorasAMinutos(horas)); 
