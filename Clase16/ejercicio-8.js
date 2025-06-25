/* Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber
si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo. */

let nombres = ['Carlos' , 'Daniel' , 'Laura' , 'Ana' ];

let nombreBuscado = "Laura";

let buscarnombre = nombres.find(nombre => nombre === nombreBuscado)
    ? "El nombre " + nombreBuscado + " está en la lista"
    : "El nombre " + nombreBuscado + " no se encuentra en la lista";

console.log (buscarnombre);
