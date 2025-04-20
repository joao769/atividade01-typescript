function calcularMediaArredondada(numeros: number[]) {
    const soma = numeros.reduce((total, num) => total + num, 0);
    return Math.round(soma / numeros.length);
}
  
console.log(calcularMediaArredondada([7.5, 8.3, 5]));