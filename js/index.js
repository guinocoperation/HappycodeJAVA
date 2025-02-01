let idade = parseInt(prompt("Qual é a tua idade?"));
let DiaDaSemana = parseInt(prompt("Escolhe um número para um dia da semana"));


if (idade < 12 && idade >= 0)
    console.log("tu és uma criança");

else if (idade < 19 && idade >= 12)
    console.log("tu és um adolescente");

else if (idade >= 19)
    console.log("tu és um adulto")
else
    console.log("Idade inválida");


switch (DiaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia da semana inválido");
        break;



}

let counter = 0;
while (counter < 100) {
    console.log(counter);
    counter += 2;
}

let NumeroMisterioso = 0;


