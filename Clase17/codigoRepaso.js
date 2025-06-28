// const prompt = require("prompt-sync")();

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

// let perros = [
//     {nombre: "Fido", raza: "Labrador"},
//     {nombre: "Toby", raza: "Chihuahua"},
// ];
// let buscado = perros.find(perro => perro.raza === "Chihuahua"); 

// console.log(buscado);

//ESTRUCTURAS DE FLUJO --> for, while, do while, if, switch, if ternario

//For --> recorrer una estructura de datos, que es recorrer? --> iterar sobre cada elemento para controlar la accion de cada elemento

// let libros = ["String", 1, 2.5, true]
// let i = "Soy una variable"

// console.log(libros[0]);
// console.log(libros[1]);
// console.log(libros[2]);
// console.log(libros[3]);

// for (let i = 0; i < libros.length; i++) {
//     console.log(libros[i]);
// }

//IF una condicion en el caso que sea positivo, podes plantear diversos escenarios y con un else manejas todo lo que no haya sido validado anteriormente. Siempre lo podes aplicar para evaluar condiciones sencillas y sin conocer estrictamente su resultado.

// let cursada = "JavaScript"

// if (cursada) {
//     console.log("Estoy en la cursada");
// }
// else {
//     console.log("No estas en la cursada");
// }


//SWITCH se aplica cuando queremos aplicar estrictamente un valor determinado, segun la situacion del  momento.

// let loQueSea = prompt("Soy lo que sea yeaaahh!!!")

// function controlPrompt(loQueSea) {
//   return loQueSea.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // borra también la tilde sobre la ñ...
// }

// let cursada = " TERRAform ".trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// switch (cursada) {
//     case "JavaScript":
//     case "Python":
//     case "Ruby":
//     case "terraform":
//         console.log("Elijiste las mejores tecnologias y lenguajes para progamar 😆")
//         break;
//     case "Java":
//         console.log("Lo unico que comparten de igual estos lenguajes son las primeras 4 letras");
//         break;
//     case "Python":
//         console.log("Elijiste uno de los mejores lenguajes para progamar 😎 ")
//     default:
//         console.log("Lo siento, seguro no estas en las grandes ligas.");
//         break;
// }

// WHILE VS DO WHILE --> while primero valida si o si la condicion, si es verdadera continua con el flujo. Do While te permite ingresar al flujo y luego valida la condicion o condiciones.


//If ternario --> cuando se realiza validaciones sencillas, verdadero o falso

// let edad = 18

// while (edad >= 18) {
//     edad -= 1
//     console.log("WOOWW ERES MAYOR DE EDAD!!!");
// }

//  let edad = 0
// do {
//     edad -= 1
//     console.log("Ingresaste sin validar nada");
    
//     (edad >= 18) ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
//     ;
    
// } while (edad >= 18);

//Funciones Vs funciones arrow --> Bloque de codigo reutilizable que a traves de un retorno expone el resultado de su determinado fin, entiendo como exponer a la forma de acceder al valor de la variable..... LOG VS RETORNO --> muestra/imprime el resultado  Retorno te permite trabajar/acceder/utilizar/ect con el valor de esa variable, no se trabaja con otra funcion.

// function sumar(a, b) {
//     let suma = a + b;
//     console.log(suma);
//     return suma + " Es el resultado de sumar los dos números 🙄";
// }

// function estudiar(resultadoDeSumar) {
//     console.log(resultadoDeSumar + " -> El resultado de la función anterior");
// }

// // Ejecutamos sumar y guardamos el resultado
// let resultado = sumar(9, 1);

// // Pasamos ese resultado a estudiar
// estudiar(resultado);

// function sumar(a, b) {
//     let suma = a + b;
//     console.log(suma);
//     console.log( suma + " Es el resultado de sumar los dos números 🙄")
// }

// function estudiar(resultadoDeSumar) {
//     console.log(resultadoDeSumar + " -> El resultado de la función anterior");
// }

// let resultadoDeSumar = sumar(9, 1);

// estudiar(sumar(9,1));

// const prompt = require("prompt-sync")();

// function saludar(nombre) {
//     console.log("Hola " + nombre);
// }

// function procesarEntradaUsuario(callback){
//     let nombre = prompt("Ingresa tu nombre: ")
//     callback(nombre)
// }

// procesarEntradaUsuario(saludar)