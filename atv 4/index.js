let notas = 0;
let soma = 0;

for (let i = 1; i <= 5; i++){
    notas = parseFloat(prompt("Digite a nota " + i + ":"));

    if (!isNaN(notas) && notas >= 0 && notas <= 5) {

        soma += notas
    } else {
        alert ("Sua nota foi inválida!");
    }
}

let med = soma/5;
alert("A media das notas é: " + med);


