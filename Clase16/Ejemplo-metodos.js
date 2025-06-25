const prompt = require("prompt-sync")();

// let usuario = prompt("Por favor ingresa un nuevo color: ");

// let arrayColores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja"];

// let nuevosColores = arrayColores.map(function (){
//     return arrayColores.push(usuario);
// })

// console.log(nuevosColores);




// let usuario = prompt("Por favor ingresa un nuevo color: ");

// let arrayColores = ["Rojo", "Azul", "Verde", "Amarillo", "Rosa"];

// // let nuevosColores = arrayColores.map(color => color + " brillante"); 
// let nuevosColores1 = arrayColores.map(function (color){
//     return color + " brillante";
// } ); 

// nuevosColores1.push(usuario); 

// console.log(nuevosColores1);
// console.log(arrayColores);

// let usuario = prompt("Por favor ingresa un nuevo color:");
// let arrayColores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja"];
// let nuevosColores = [...arrayColores, usuario + " nuevo"];
// console.log(nuevosColores);
// console.log(arrayColores);


// let usuario = prompt("Por favor ingresa un nuevo color: ");

// let arrayColores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja"];

// let nuevosColores = arrayColores.map(color => color)

// nuevosColores.push(usuario)

// let coloresFlaseros =  nuevosColores.map(color => color + " 🎆 Flashero")

// // mapeo --> usar copia y obtener algo nuevo


// console.log(nuevosColores);
// console.log(coloresFlaseros);
// console.log(arrayColores);


// let frutas = ["🍎", "🍇", "🍉", "🍓"]

// frutas.forEach(f => console.log(f));

// console.log(frutas);

let perros = [
    {nombre: "Fido", raza: "Labrador"},
    {nombre: "Toby", raza: "Chihuahua"},
];
let buscado = perros.find(perro => perro.raza === "Chihuahua"); 

console.log(buscado);


















