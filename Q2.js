"use strict";
function calcularNotaFinal(MP) {
    return (60 * 2) - MP;
}
let MP = 40;
let NP = calcularNotaFinal(MP);
console.log(`A nota que precisa tirar é: ${NP}`);
// MP --> Média Parcial
// NP --> Nota para passar
