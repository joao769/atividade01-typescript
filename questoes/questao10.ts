function calcularIdade(anoNascimento: number) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}
  
console.log(calcularIdade(2005));  