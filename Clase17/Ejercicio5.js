/*Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método
“.toLowerCase()” para este punto.
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada
por espacios.
5. Devuelva un nuevo array con las frases modificadas.*/

const frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "eL servicio aqui es MALO",
]

function procesarFrases(arrayFrases) {
    return arrayFrases.map(frase => {
        let fraseMinuscula = frase.toLowerCase();
        
        let palabras = fraseMinuscula.split(" ");
        
        palabras = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);
        
        return palabras.join(" ");
    });
}

let resultado = procesarFrases(frases);
console.log(resultado);
