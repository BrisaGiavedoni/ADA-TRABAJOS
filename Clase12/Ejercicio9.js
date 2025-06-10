/* Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 

a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
b)	La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
c)	Por último, es necesario tener el total de gastos realizados en el mes.
✔	Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
*/

let gastos = [
  [1135, 2500,  900, 1600, 2800, 3650, 1100],  // Semana 1 (fila 0)
  [1750, 1890, 1900, 1300,  898, 1750, 2800],  // Semana 2 (fila 1)
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],  // Semana 3 (fila 2)
  [ 800, 1250, 1430, 2100, 1980, 1270,  950]   // Semana 4 (fila 3)
]

let semana = 2; 
let filaSemana = semana - 1;


let totalSemana = 0;
for (let dia = 0; dia < gastos[filaSemana].length; dia++) {
  totalSemana += gastos[filaSemana][dia]; 
}
console.log(`Total de gastos en la semana ${semana}: $${totalSemana}`);

let dia = 3;
let totalDia = 0;
for (let semana = 0; semana < gastos.length; semana++) {
  totalDia += gastos[semana][dia - 1]; 
}
console.log(`Total de gastos en el día ${dia}: $${totalDia}`);

let totalMes = 0;

for (let semana = 0; semana < gastos.length; semana++) {
  for (let dia = 0; dia < gastos[semana].length; dia++) {
    totalMes += gastos[semana][dia];
  }
} 
console.log(`Total de gastos en el mes: $${totalMes}`);

let maxGastos = 0;
let semanaMax = 0;
let diaMax = 0; 

for (let semana = 0; semana < gastos.length; semana++) {
  let totalSemana = 0;
}
  for (let dia = 0; dia < gastos[semana].length; dia++) {
    totalSemana += gastos[semana][dia];
    if (gastos[semana][dia] > maxGastos) {
      maxGastos = gastos[semana][dia];
      semanaMax = semana + 1; 
      diaMax = dia + 1; 
  }
}
console.log(`La semana con más gastos es la ${semanaMax}, el día con más gastos es el ${diaMax} con un total de $${maxGastos}.`);





