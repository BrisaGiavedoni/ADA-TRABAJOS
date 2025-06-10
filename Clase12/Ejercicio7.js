/*Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en la matriz.
*/

let matriz = [
    [5,9,20,4,15],
    [60,6,58,8,11],
    [25,2,7,14,3],
    [12,10,40,18,22],
    [17,21,1,16,30]
];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let numero = matriz[i][j];
        suma += numero;
    }
}

console.log("La suma total es: " + suma);