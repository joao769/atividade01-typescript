import * as readline from 'readline';

function advinheNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function perguntar() {
    rl.question('Adivinhe o número (1-100): ', (resposta) => {
      const chute = Number(resposta);
      tentativas++;

      if (chute === numeroAleatorio) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        rl.close();
      } else if (chute < numeroAleatorio) {
        console.log('O número é maior!');
        perguntar();
      } else {
        console.log('O número é menor!');
        perguntar();
      }
    });
  }

  perguntar();
}

advinheNumero();