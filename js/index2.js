let max = 99
let min = 1
let code = 0;
let tentativas = 0;
let Numero = (Math.round(Math.random() * (max - min) + min));
while (code == 0) {
    let NumeroMisterioso = parseInt(prompt("Qual é o número misterioso?"));
    if (NumeroMisterioso > Numero)
        console.log("O número misterioso é menor");
    else if (NumeroMisterioso < Numero)
        console.log("O número misterioso é maior");
    else if (NumeroMisterioso == Numero)
        code = code + 1
    tentativas + 1
}
console.log("O número misterioso era " + Numero);
console.log("Tu tentaste" + tentativas)
