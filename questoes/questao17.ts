function filtrarStringsMaiorQueCinco(lista: string[]) {
    return lista.filter(str => str.length > 5);
}
  
console.log(filtrarStringsMaiorQueCinco(["pequeno", "grande", "sol", "estrelado"]));