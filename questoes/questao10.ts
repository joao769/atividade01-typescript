function calcularIdade(nascimento: number) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - nascimento;
}
  
console.log(calcularIdade(2005));  