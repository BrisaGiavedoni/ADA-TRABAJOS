/*Ejercicio 9: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
mismo del ejercicio anterior (buscar la posición de un número en un
array), pero partiendo de esta lista: 
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
a mayor, utilizando bubble sort. Luego, respondan las siguientes
preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?*/

let numeros = [12,3,5,7,1,22,47,100];

function bubbleSort(array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        n--; 
    } while (swapped);

    return array;
}

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

numeros = bubbleSort(numeros);
const numerosABuscar = [12, 5, 22, 100];
numerosABuscar.forEach(numero => {
    const posicion = busquedaBinaria(numeros, numero);
    if (posicion !== -1) {
        console.log(`El número ${numero} está en la posición ${posicion}.`);
    } else {
        console.log(`El número ${numero} no está en la lista.`);
    }
});

console.log("Lista ordenada: ", numeros);


