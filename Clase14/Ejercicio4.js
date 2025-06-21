/* Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad. */

const prompt = require('prompt-sync')();

let cantidad = parseInt(prompt("Introduce la cantidad de productos comprados: "));
let precioUnitario = parseFloat(prompt("Introduce el precio unitario del producto: "));

const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let total = cantidad * precioUnitario;
    let descuento = 0;

    if (cantidad >= 10) {
        descuento = total * 0.20; 
    } else if (cantidad >= 5) {
        descuento = total * 0.10; 
    }

    return total - descuento;
};

let totalConDescuento = calcularTotalConDescuento(cantidad, precioUnitario);
console.log(`El total a pagar con descuento es: $${totalConDescuento.toFixed(2)}`);