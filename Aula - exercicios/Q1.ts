function calcularVolume(r: number, h: number): number {
 return 3.14 * (r ** 2) * h;
 }

 let volume = calcularVolume(4, 20);

 console.log(`Volume do Cilindro: ${volume.toFixed(2)} cm³`);