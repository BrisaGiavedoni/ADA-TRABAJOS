/*Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()”
4. Verifique si existe un producto con precio mayor a 50. Para esto
investigar el método “.some()”
5. Devuelva una cadena de nombres de productos separados por
comas. */

const prompt = require("prompt-sync")();

let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 30 },
    { nombre: "Monitor", precio: 150 }, 
    { nombre: "Impresora", precio: 100 }
];

function gestionarProductos(productos) {
    let nuevoProducto = prompt("Ingrese el nombre del nuevo producto: ");
    let precioNuevoProducto = parseFloat(prompt("Ingrese el precio del nuevo producto: "));
    productos.push({ nombre: nuevoProducto, precio: precioNuevoProducto });
    productos.pop();
    let productoBuscado = prompt("Ingrese el nombre del producto a buscar: ");
    let indiceProducto = productos.findIndex(producto => producto.nombre.toLowerCase() === productoBuscado.toLowerCase());
    let existeProductoCaro = productos.some(producto => producto.precio > 50);      
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");
    return {  
        nuevoProducto: { nombre: nuevoProducto, precio: precioNuevoProducto },
        indiceProducto: indiceProducto,
        existeProductoCaro: existeProductoCaro,
        nombresProductos: nombresProductos
    };
}

let resultado = gestionarProductos(productos);
console.log("Nuevo producto agregado:", resultado.nuevoProducto);
console.log("Índice del producto buscado:", resultado.indiceProducto);
console.log("¿Existe un producto con precio mayor a 50?:", resultado.existeProductoCaro);
console.log("Nombres de productos:", resultado.nombresProductos);


