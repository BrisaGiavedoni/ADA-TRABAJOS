/* Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
"Girasol" al inicio de la lista.
Devuelva una cadena de flores en orden alfabético separadas por puntos.*/

let flores = "Rosa , Tulipán , Orquidea, Lirio"

function gestionarFloreria() {
    let listaFlores = flores.split(",").map(flor => flor.trim());

    if (listaFlores.includes("Margarita")) {
        listaFlores.push("Azucena");
    }

    listaFlores = listaFlores.map(flor => flor === "Orquidea" ? "Clavel" : flor);

    let indiceGirasol = listaFlores.indexOf("Girasol");
    if (indiceGirasol === -1) {
        listaFlores.unshift("Girasol"); 
    }

    let floresOrdenadas = listaFlores.sort().join(". ");

    return floresOrdenadas;
}

let resultado = gestionarFloreria();
console.log("Flores en orden alfabético:", resultado);
