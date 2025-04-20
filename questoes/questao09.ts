type Aluno = {
    nome: string;
    nota: number;
}

function calcularMediaAlunos(alunos: Aluno[]) {
    const soma = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return soma / alunos.length;
}

console.log(
    calcularMediaAlunos([
        { nome: 'Francisco', nota: 9 }, 
        { nome: 'Laura', nota: 6 }
    ])
); 