# Atividade 01 - TypeScript

Neste repositório estão reunidos 21 exercícios de lógica de programação desenvolvidos em TypeScript. As atividades fazem parte da disciplina de **Programação para Web**, oferecida no curso de **Engenharia de Software** da UPE. Propostas pelo professor Augusto César, essas atividades têm como objetivo reforçar o aprendizado prático dos conceitos básicos de programação utilizando TypeScript.

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- ts-node (para execução dos arquivos .ts)

## ⚙️ Como Executar o Projeto

Antes de começar, é necessário ter o **Node.js** instalado em sua máquina. Caso ainda não tenha, você pode fazer o download e instalar a partir [deste link](https://nodejs.org/en/download/).

1. Clone o repositório:

    ```bash
    git clone https://github.com/joao769/atividade01-typescript.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd atividade01-typescript
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute um exercício específico:

    ```bash
    npx ts-node questoes/nome-do-arquivo.ts
    ```

Substitua `nome-do-arquivo.ts` pelo arquivo que deseja testar, como `questao01.ts`, `questao02.ts`, etc.

> **Observação:** Se estiver usando VS Code, também é possível clicar com o botão direito sobre o arquivo `.ts` e selecionar **"Run Code"** (caso tenha a extensão _Code Runner_ instalada).

## 📘 Exercícios Implementados

1. **soma(a, b)**: Retorna a soma de dois números.
2. **isPar(numero)**: Verifica se um número é par.
3. **media(nota1, nota2, nota3)**: Calcula a média aritmética de três notas.
4. **imc(peso, altura)**: Calcula o Índice de Massa Corporal (IMC).
5. **calcularDesconto(valor, percentual)**: Aplica um percentual de desconto a um valor.
6. **calcularImpostoRenda(salario)**: Calcula o imposto de renda com base nas faixas salariais.
7. **calcularMediaArredondada(numeros)**: Calcula a média de uma lista de números e arredonda para o inteiro mais próximo.
8. **contarDigitosParesImpares(numero)**: Conta quantos dígitos pares e ímpares há em um número.
9. **calcularMediaAlunos(alunos)**: Calcula a média das notas de uma lista de alunos.
10. **calcularIdade(anoNascimento)**: Retorna a idade atual com base no ano de nascimento.
11. **gerarTabuada(numero)**: Exibe a tabuada do número de 1 a 10 no console.
12. **adivinheNumero()**: Jogo que gera um número aleatório entre 1 e 100 e permite o usuário adivinhar com dicas.
13. **verificarPropriedade(objeto, propriedade)**: Verifica se um objeto possui uma determinada propriedade.
14. **calcularPrecoProduto(custo, lucro, frete)**: Calcula o preço final de um produto com base no custo, margem de lucro e frete.
15. **palavraMaisLonga(str)**: Encontra a palavra mais longa de uma string.
16. **imprimirQuadro(lista)**: Imprime uma lista de palavras em um quadro retangular.
17. **filtrarStringsMaiorQueCinco(lista)**: Retorna as strings com mais de 5 caracteres de uma lista de palavras.
18. **livrosPorAutor(livros, autor)**: Filtra livros de um determinado autor.
19. **pessoaMaisVelha(pessoas)**: Retorna o nome da pessoa mais velha de uma lista.
20. **carrosFabricadosDepoisDe(carros, ano)**: Filtra os carros fabricados após um certo ano.
21. **inverterString(str)**: Retorna a string invertida.