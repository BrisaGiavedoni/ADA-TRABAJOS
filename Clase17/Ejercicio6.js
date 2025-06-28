/*Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por
puntos. Utilizar “.sort()”*/

let marcasAutos = "Toyota , Honda , Ford, Chevrolet , Nissan"

function gestionarAutos() {                             
    let marcas = marcasAutos.split(",").map(marca => marca.trim());

    let existeTesla = marcas.includes("Tesla");

    marcas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

    let indice = marcas.indexOf("Chevrolet");
    let indiceChevrolet = indice === -1 ? "No existe Chevrolet" : indice;
    
    let marcasOrdenadas = marcas.sort().join(". ");

    return {
        existeTesla: existeTesla,
        indiceChevrolet: indiceChevrolet,
        marcasOrdenadas: marcasOrdenadas
    };
}

let resultado = gestionarAutos();
console.log("¿Existe la marca 'Tesla'?:", resultado.existeTesla);
console.log("Índice de la marca 'Chevrolet':", resultado.indiceChevrolet);
console.log("Marcas ordenadas:", resultado.marcasOrdenadas);
