type Pessoa = {
  nome: string;
  idade: number;
}

function pessoaMaisVelha(pessoas: Pessoa[]) {
    return pessoas.reduce((maisVelha, pessoa) => pessoa.idade > maisVelha.idade ? pessoa : maisVelha).nome;
}

console.log(
  pessoaMaisVelha([
    { nome: "Miguel", idade: 22 },
    { nome: "Sophia", idade: 19 }
  ])
);