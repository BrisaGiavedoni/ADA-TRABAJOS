/* Ejercicio 7: Verifi car si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.*/

let comidas = ["Pizza", "Hamburguesa", "Tacos"];
let listaContiene = comidas.includes("Sushi");

listaContiene
  ? console.log("La lista contiene Sushi.")
  : console.log("La lista no contiene Sushi.");

