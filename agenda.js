"use strict";
/*
const contatos = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Fernanda",
    "Ricardo",
    "Sofia",
    "Lucas",
    "Isabela"
]
//3 - Imprimir a lista de contatos usando while
let pos = 0
while (pos < contatos.length) {
    console.log(contatos[pos])
    pos++
}
*/
const buscando = "Carlos";
let encontrado = false;
let pos = 0;
while (pos < contatos.length && !encontrado) {
    if (buscando === contatos[pos]) {
        console.log(`Contato encontrado: ${contatos[pos]}`);
        encontrado = true;
    }
    pos++; //atualiza a posição na lista
}
