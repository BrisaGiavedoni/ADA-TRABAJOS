/* Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔ título: una cadena con el título del libro.
✔ autor: una cadena con el nombre del autor del libro.
✔ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado. */

const libro1 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
};

const libro2 = {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    anioPublicacion: 1813  
};

const mostrarLibro = libros => {
    for (let i = 0; i < libros.length; i++) {
        console.log(`📚 Libro #${i + 1}`);
        console.log(`Título: ${libros[i].titulo}`);
        console.log(`Autor: ${libros[i].autor}`);
        console.log(`Año de publicación: ${libros[i].anioPublicacion}`);
        console.log("--------------------------");
    }
};

let listaDeLibros = [libro1, libro2];
mostrarLibro(listaDeLibros);