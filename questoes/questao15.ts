function palavraMaisLonga(str: string) {
    const palavras = str.split(' ');
    return palavras.reduce((maior, atual) => atual.length > maior.length ? atual : maior);
}
  
console.log(palavraMaisLonga('Tutorial de desenvolvimento da web'));