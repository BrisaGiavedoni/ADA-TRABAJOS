/*Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.*/

const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Ingrese un número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
let numero3 = parseFloat(prompt("Ingrese el tercer numero:"));

if(numero1 && numero2 > numero3 && numero1 > numero2){
    console.log ( "El mayor es: " + numero1);
}else if(numero1 && numero2 < numero3 ){
    console.log ( "El mayor es: " + numero3);
}else{
    console.log ( "El mayor es: " + numero2);
}
