const num = parseInt(prompt("Digite um número de 1 ao 10"));

if (!isNaN(num)) {
   let tabuada = "";

   for (let i = 1; i <= 10; i++) {
      tabuada += `${num} x ${i} = ${(num * i)} "//";`
   }

   alert("A tabuada do " + num + ": " + tabuada);
} else {
   alert("O número digitado é inválido");
}
