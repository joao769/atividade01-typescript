function calcularPrecoProduto(custo: number, lucro: number, frete: number) {
    return custo + (custo * (lucro / 100)) + frete;
}
  
console.log(calcularPrecoProduto(20, 10, 15)); 