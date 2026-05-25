let totalRenda: number = 0;
let totalFilhos: number = 0;
let contadorFamilias: number = 0;

while (true) {
    let renda: number = parseFloat(prompt("Informe a renda familiar (valor negativo para sair):") || "-1");

    if (renda < 0) break;

    let numFilhos: number = parseInt(prompt("Informe o número de filhos:") || "0");

    totalRenda += renda;
    totalFilhos += numFilhos;
    contadorFamilias++;
}

if (contadorFamilias > 0) {
    const mediaRenda = totalRenda / contadorFamilias;
    const mediaFilhos = totalFilhos / contadorFamilias;

    console.log(`Média de Renda: R$ ${mediaRenda.toFixed(2)}`);
    console.log(`Média de Filhos: ${mediaFilhos.toFixed(2)}`);
} else {
    console.log("Nenhuma família foi cadastrada.");
}



let num: number = 0;


do {
    num = parseInt(prompt("Número inteiro positivo (>1):") || "0");
} while (num <= 1);

let primo: boolean = true;
let divisor: number = num - 1;


while (primo && divisor > 1) {
    if (num % divisor === 0) {
        primo = false;
    } else {
        divisor--;
    }
}

if (primo) {
    console.log(`O número ${num} é primo.`);
} else {
    console.log(`O número ${num} NÃO é primo.`);
}




function ehPrimo(n: number): boolean {
    if (n <= 1) return false;
    let divisor = n - 1;
    while (divisor > 1) {
        if (n % divisor === 0) return false;
        divisor--;
    }
    return true;
}

const inicio: number = parseInt(prompt("Digite o início do intervalo:") || "0");
const fim: number = parseInt(prompt("Digite o fim do intervalo:") || "0");

let contadorPrimos: number = 0;

for (let i = inicio; i <= fim; i++) {
    if (ehPrimo(i)) {
        contadorPrimos++;
    }
}

console.log(`No intervalo de ${inicio} a ${fim}, existem ${contadorPrimos} números primos.`);