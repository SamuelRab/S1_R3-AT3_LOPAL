constNum1 = parseFloat(prompt("Digite o primeiro número"));
constNum2 = parseFloat(prompt("Digite o segundo número"));

if (!isNaN(constNum1) && !isNaN(constNum2)) {
    let comeco;
    let fim;
  
    if (constNum1 < constNum2) {
      comeco = constNum1;
      fim = constNum2;
    } else {
      comeco = constNum1;
      fim = constNum2;
    }
  
    let numPares = "";
  
    for (let i = comeco; i <= fim; i++) {
      if (i % 2 === 0) {
        numPares += i + " ";
      }
    }
  
    alert("Números pares entre o digitado: " + comeco + " e " + fim + " são : " + numPares);
  } else {
    alert("Você não digitou um número que seja válido para o código!");
  }