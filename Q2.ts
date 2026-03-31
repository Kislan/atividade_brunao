function calcularNotaFinal(MP: number): number {
 return (60*2) - MP;
 }

 let MP: number = 40;
 let NP: number = calcularNotaFinal(MP);
 
 console.log(`A nota que precisa tirar é: ${NP}`);

 // MP --> Média Parcial
 // NP --> Nota para passar