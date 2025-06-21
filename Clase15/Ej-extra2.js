/* Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
1. Dividir la oración en palabras individuales.
2. Clasificar las palabras en dos categorías:
▪ Cortas (menos de 5 letras)
▪ Largas (5 letras o más)
3. Mostrar ambas listas de palabras clasificadas.
4. La oración es: "JavaScript es un lenguaje poderoso y versátil". */

let oracion = "JavaScript es un lenguaje poderoso y versátil";
// 1. Dividir la oración en palabras individuales
let palabras = oracion.split(" ");
console.log(`Palabras individuales: ${palabras.join(", ")}`);
// 2. Clasificar las palabras en dos categorías
let cortas = [];
let largas = [];

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];

    if (palabra.length < 5) {
        cortas.push(palabra);
    } else {
        largas.push(palabra);
    }
}
// 3. Mostrar ambas listas de palabras clasificadas
console.log(`Palabras cortas: ${cortas.join(", ")}`);
console.log(`Palabras largas: ${largas.join(", ")}`);
