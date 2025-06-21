/* Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final. */

const prompt = require('prompt-sync')();

let precioProducto = parseFloat(prompt('Introduce el precio del producto: '));
let porcentajeIVA = parseFloat(prompt('Introduce el porcentaje de IVA: '));

const calcularPrecioFinal = (precioProducto, porcentajeIVA) => precioProducto + (precioProducto * porcentajeIVA / 100);

let precioFinal = calcularPrecioFinal(precioProducto, porcentajeIVA);

console.log(`El precio final del producto es: ${precioFinal.toFixed(2)}`);  
