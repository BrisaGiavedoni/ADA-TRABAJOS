/*Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.*/

const prompt = require("prompt-sync")();

const PI = 3.14159;

let radio = parseFloat(prompt("Ingrese el radio del circulo:"));

if (radio > 0) {
  let area = PI * radio * radio;
  let perimetro = 2 * PI * radio;
  console.log("Valor area: " + area);
  console.log("Valor de perimetro: " + perimetro);
} else {
  console.log("Por favor, ingresa un radio válido (mayor que 0).");
}
