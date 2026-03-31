/* 2. Calcular a média de 4 notas que estão em um array
   const no caso de array ou objeto: não deixa alterar a 
   referência para o array ou objeto */
const notas: number[] = [80.0, 54.40, 60.0, 90.54]
let soma = 0
let pos = 0 //posição no array - começa de 0
while (pos < notas.length) {
    if (pos === 0 || pos === 1) {
        soma = soma + 2 * notas[pos]  
    } else {
        soma = soma + 3 * notas[pos]  
    }
    pos++ //pos = pos + 1
}
console.log(`Média Parcial = ${soma / 10}`)