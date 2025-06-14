/* Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.*/

function calcularAreaTriangulo(base , altura) {
    let area =(base * altura) / 2;
    return area; 
}

console.log("El area del triangulo = " + calcularAreaTriangulo (5, 10));
