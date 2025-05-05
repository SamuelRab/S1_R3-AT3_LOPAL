let num1 = parseFloat(prompt("Digite o primeiro número")); // Variável do primeiro número e informação para o usuário para digitar.

let num2 = parseFloat(prompt("Digite o segundo número")); // Variável do segundo número e informação para o usuário para digitar.

let pares = ""; // Definição da variável dos números pares.

if (num1 % 2 == 0) { // Verifica se o número é par.

  for (let i = num1; i <= num2; i += 2) { // looping para os números pares.
    pares += i;
  }
} else {
  num1 = num1 + 1;
  for (let i = num1 ; i <= num2; i += 2) { // looping para os números que começarem ou terminarem com ímpar.
    pares = pares + i;
  }
}
console.log(pares)
alert(pares) // Resposta ao usuário com os números.