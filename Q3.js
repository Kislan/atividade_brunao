"use strict";
function converterData(dataStr) {
    let [dia, mes, ano] = dataStr.split('/');
    return new Date(`${ano}-${mes}-${dia}`);
}
function diasPassados(data) {
    let inicioAno = new Date('2025-01-01');
    let diferenca = data.getTime() - inicioAno.getTime();
    let dias = diferenca / (1000 * 60 * 60 * 24);
    return dias;
}
let dataConvertida = converterData('11/04/2025');
let resultado = diasPassados(dataConvertida);
console.log(`Dias desde o início do ano: ${resultado}`);
