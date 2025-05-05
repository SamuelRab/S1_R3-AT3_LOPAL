 // Pedi ao usuário um número e exibe a tabuada de 1 a 10 desse número.

const num = parseInt(prompt("Digite um número de 1 ao 10")); // Variável que armazena o número digitado pleo usuário.

if (!isNaN(num)) { // Condição que indica que o num tem que ser um número.
   let tabuada = ""; // Indica que a variável irá mostrar o número da tabuada.

   for (let i = 1; i <= 10; i++) { // Quantos números serão armazenados para a multiplicação na tabuada.
      tabuada += `${num} x ${i} = ${(num * i)} "//";` // Será feita a multiplicação até 10 do valor digitado pelo usuário.
   }

   alert("A tabuada do " + num + ": " + tabuada); // Resposta para o usuário da tabuada feita.
} else {
   alert("O número digitado é inválido"); // Indica a invalidez de uma entrada de informação que não seja um número.
}
