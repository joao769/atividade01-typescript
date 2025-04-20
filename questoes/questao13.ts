function verificarPropriedade(objeto: object, propriedade: string) {
    return objeto.hasOwnProperty(propriedade);
}

console.log(verificarPropriedade({ nome: 'João' }, 'nome'));