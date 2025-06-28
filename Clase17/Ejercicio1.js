 /* Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas.
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas. */

let estudiante = {
    nombre: "Juan Perez",
    edad: 20,
    notas: [8, 7, 9, 6, 10]
};

function procesarEstudiante(estudiante) {
    estudiante.notas.push(9);
    estudiante.notas.shift();
    let sumaNotas = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    let promedio = sumaNotas / estudiante.notas.length;
    let nombreMayusculas = estudiante.nombre.toUpperCase();
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
};

let resultado = procesarEstudiante(estudiante);
console.log(resultado); 
