/* Calcula el total de ventas de productos seleccionados
Supón que tienes una lista de productos con sus precios en formato de
objeto:
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];
Queremos:
o Seleccionar los productos cuyo precio sea mayor o igual a 50.
o Obtener solo los nombres de esos productos.
o Calcular el precio total sumando los precios de los productos
seleccionados.
o Imprime el total y los nombres de los productos seleccionados en la
consola */

const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];

const seleccionados = products.filter(producto => producto.price >= 50);
const nombres = seleccionados.map(producto => producto.name);
const total = seleccionados.reduce((suma, producto) => suma + producto.price, 0);

console.log("Productos seleccionados:", nombres.join(", "));
console.log("Total de ventas: $" + total);


