function calcularDesconto(valor: number, percentual: number) {
    return valor - (valor * (percentual / 100));
}
  
console.log(calcularDesconto(50, 70)); 