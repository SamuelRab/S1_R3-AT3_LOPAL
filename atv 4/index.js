// Programa que solicita 5 notas e calcula a média delas.

let notas = 0; // Variável que armazena o valor das notas.
let soma = 0; // Variável que armazena a soma das notas.

for (let i = 1; i <= 5; i++){ // Define a quantidade das notas.
    notas = parseFloat(prompt("Digite a nota " + i + ":")); // Informa ao usuário para colocar as notas.

    if (!isNaN(notas) && notas >= 0 && notas <= 5) { // Verifica a validação das notas informadas pelo usuário.

        soma += notas // Demonstra e indica a soma das notas.
    } else {
        alert ("Sua nota foi inválida!"); // Indica a invalidez de uma entrada de informação que não seja um número.
    }
}

let med = soma/5; // Variável que idica a operação para fazer a média da soma das notas.
alert("A media das notas é: " + med); // Resposta ao usuário da média feita das notas.


