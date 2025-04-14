// programa que solicita ao usuário um número e faz uma sequência do 1 até o número digitado.

const numA = parseInt(prompt("Digite um número maior ou igual a 1:")); // solicita ao usúário que digite um número inteiro maior ou igual a 1.

if (isNaN(numA) || numA < 1) {
    alert("Você não digitou um número maior ou igual que 1");
} // Indica a invalidez de uma entrada de informação que não seja um número.
else {
    let sequenciaNumero = ""; // Variável que armazena a sequência do número.
    for (let i = 1; i <= numA; i++) {
        sequenciaNumero += `${i}, `
    }
    /*
        Estrutura do loop for:
        - Inicialização: let i = 1 -> começamos o contador i em 1.
        - Condição i<= num -> 0 loop continua enquanto i for menor ou igual a num
        (variável que armazena o número do usuário)
        - Atualização : i++ -> A cada repetição, i aumenta em 1
        */

}
alert(sequenciaNumero)