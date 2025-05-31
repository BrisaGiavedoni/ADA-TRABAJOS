/*Ejercicio 7 - Intercambio de Valores: 
Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
*/

let valor1 = 6;
let valor2 = 12;
console.log("Antes del intercambio:");
console.log("Valor 1:", valor1);
console.log("Valor 2:", valor2);

let temp = valor1; // Usando una variable temporal
valor1 = valor2;
valor2 = temp;
console.log("Después del intercambio:");  
console.log("Valor 1:", valor1);
console.log("Valor 2:", valor2);

