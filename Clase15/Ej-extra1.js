/* Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
1. Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
3. Eliminar el primer producto del inventario.
4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
*/

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log(`Inventario inicial: ${inventario.join(", ")}`);

// 1. Agregar un nuevo producto "Impresora" al inventario
inventario.push("Impresora");
console.log(`Producto agregado: Impresora`);
// 2. Comprobar si "Tablet" está en el inventario
inventario.includes("Tablet")
  ? console.log("El inventario contiene Tablet.")
  : console.log("El inventario no contiene Tablet.");
// 3. Eliminar el primer producto del inventario
let eliminado = inventario.shift(); 
console.log(`El producto eliminado es: ${eliminado}`);
// 4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas
let listaActualizada = inventario.join(", ");
console.log(`Lista actualizada de productos: ${listaActualizada}`);



