/*Ejercicio 9: Cuenta regresiva para el despegue
Consigna:
Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for para realizar la cuenta regresiva.
*/
let cuentaRegresiva = 10;

for (let i = cuentaRegresiva; i >= 0; i--) {
    console.log(i);
    if (i === 0) {
        console.log("¡Despegue!");
    }
}