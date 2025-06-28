/*  Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las
siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro"
5. Devuelva una cadena de nombres en orden alfabético separados
por puntos. Investigar el método “.sort()” */

const prompt = require("prompt-sync")();

function transformarYAnalizarNombres() {
    let input = prompt("Ingrese una lista de nombres separados por comas: ");
    let nombres = input.split(",").map(nombre => nombre.trim());
     
    nombres = nombres.map(nombre => nombre.trim());            
    let existeJuan = nombres.includes("Juan");
    nombres = nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre);

    let indicePedro = nombres.indexOf("Pedro")
      indicePedro === -1 ? "No existe Pedro" : indice = indicePedro;

    let nombresOrdenados = nombres.slice().sort((a, b) => a.localeCompare(b)).join(". ");

    return {
        existeJuan: existeJuan,
        indicePedro: indicePedro,
        nombresOrdenados: nombresOrdenados
    };
};

let resultado = transformarYAnalizarNombres();
console.log("¿Existe el nombre 'Juan'?:", resultado.existeJuan);
console.log("Índice del nombre 'Pedro':", resultado.indicePedro);
console.log("Nombres ordenados:", resultado.nombresOrdenados);
