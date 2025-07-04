/* Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
3. Al fi nal, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
*/

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

let totalAtendidos = 0;

while (clientes.length > 0) {
    let clienteActual = clientes.shift(); 
    totalAtendidos++;

    if (clienteActual === "VIP") {
        console.log(`Atención PRIORITARIA para el cliente: ${clienteActual}`);
    } else {
        console.log(`Atendiendo al cliente: ${clienteActual}`);
    }
}

console.log(`Total de clientes atendidos: ${totalAtendidos}`);
