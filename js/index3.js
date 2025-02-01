
function rectArea() {
    let num1 = parseInt(prompt("Diga a altura"));
    let num2 = parseInt(prompt("Diga a largura"));

    let area = num1 * num2;
    return area;
}

function circleArea() {
    let num1 = parseInt(prompt("Diga o raio"));

    let area = num1 * num1 * Math.PI;
    return area;
}

function triangleArea() {
    let num1 = parseInt(prompt("Diga a base"));
    let num2 = parseInt(prompt("Diga a altura"));

    let area = num1 * num2 / 2;
    return area;
}




let figure
while (true) {
    figure = prompt("Escolha a figura geométrica:(C= círculo, T= Triângulo, R= Retângulo, S= Sair");
    if (figure == "S") {
        break;
    } else if (figure == "C") {
        console.log(circleArea());
    } else if (figure == "T") {
        console.log(triangleArea());
    } else if (figure == "R") {
        console.log(rectArea());
    } else {
        console.log("Figura inválida");
    }
}