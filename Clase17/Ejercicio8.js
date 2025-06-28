/* Ejercicio 8: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria,
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
solución.
Dada la siguiente lista:
Utilizar el algoritmo de búsqueda binaria para responder los siguientes
ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya
que podemos leer el array, y determinar con un cálculo visual la posición
de cada elemento, pero, la propuesta que les hago es que codeen un
algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
complejidad extra.*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11];

function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        const medio = Math.floor((inicio + fin) / 2);
        const valorMedio = array[medio];

        if (valorMedio === objetivo) {
            return medio; 
        } else if (valorMedio < objetivo) {
            inicio = medio + 1; 
        } else {
            fin = medio - 1; 
        }
    }

    return -1; 
}


const numerosABuscar = [1, 5, 6, 9, 11];


numerosABuscar.forEach(numero => {
    const posicion = busquedaBinaria(lista, numero);
    if (posicion !== -1) {
        console.log(`El número ${numero} está en la posición ${posicion}.`);
    } else {
        console.log(`El número ${numero} no está en la lista.`);
    }
});
