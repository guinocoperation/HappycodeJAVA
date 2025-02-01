let mortes = [
    { nome: "mortes por doença arterial coronariana", numero: 481897 },
    { nome: "mortes por tuberculose", numero: 66045 },
    { nome: "mortes por enfarte", numero: 295339 },
    { nome: "mortes por cirrose do fígado", numero: 64075 },
    { nome: "mortes por hepatite", numero: 287876 },
    { nome: "mortes por neoplasia maligna", numero: 20324 },
    { nome: "mortes por câncro no geral", numero: 173141 },
    { nome: "mortes por Doença pulmonar obstrutiva crônica", numero: 155419 },
    { nome: "mortes por doenças no rim", numero: 60275 },
    { nome: "mortes por doença renal crônica", numero: 136138 },
    { nome: "mortes por doença do pâncreas", numero: 114288 },
    { nome: "mortes por doença cardíaca", numero: 93511 },
    { nome: "mortes por doença do coração", numero: 66496 },
    { nome: "mortes por doença de câncro do pulmão", numero: 58385 },
    { nome: "mortes por doença de câncro do colo do útero", numero: 51342 },
    { nome: "mortes por doença do câncro do ovário", numero: 49553 },
    { nome: "mortes por doença do câncro do trato uterino", numero: 47669 },
    { nome: "mortes por doença do câncro do intestino", numero: 45552 },
    { nome: "mortes por doença do câncro do pâncreas", numero: 43999 },
    { nome: "mortes por doença do câncro do intestino", numero: 33997 },
    { nome: "mortes por doença do câncro do osso", numero: 42989 },
    { nome: "mortes por doença do câncro do músculo", numero: 22872 },
    { nome: "mortes por doença do câncro do nervo", numero: 13999 },
    { nome: "mortes por doença do câncro do olho", numero: 4929 },
    { nome: "mortes por doença do câncro do esôfago", numero: 3099 },
    { nome: "mortes por doença do câncro do bronquio", numero: 7649 },
    { nome: "mortes por diabetes", numero: 81717 },
    { nome: "mortes por alzheimer", numero: 101807 }

];

function calculaMediaNotas(alunoNotas) {
    let totalNotas = 0
    for (let position = 0; position < alunoNotas.length; position++) {

        totalNotas = alunoNotas[position].nota + totalNotas
    }
    return totalNotas / alunoNotas.length;
}

let counter = 0;
while (counter < alunos.length) {
    document.write(alunos[counter].nome + ' ' + alunos[counter].nota + "<br>");
    counter = counter + 1;
}

function updateTable(estudantes) {
    const tbody = document.querySelector(".tableBody");
    const average = document.querySelector(".averageScore")
    let tr;
    let tdName;
    let tdScore;
    for (let position = 0; position < estudantes.length; position++) {
        tr = document.createElement("tr");
        tdName = document.createElement("td");
        tdScore = document.createElement("td");
        tdName.appendChild(document.createTextNode(estudantes[position].nome));
        tdScore.appendChild(document.createTextNode(estudantes[position].nota));
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }
    average.appendChild(document.createTextNode(calculaMediaNotas(alunos)));
}


function adicionaAluno(estudantes, aluno, nota) {
    estudantes.push({ nome: aluno, nota: nota })
}

function removerAluno(estudantes, nomeAluno) {
    let index = estudantes.findIndex((estudante) => estudante.nome === nomeAluno)
    if (index !== -1) {
        estudantes.splice(index, 1)
    }
}

removerAluno(alunos, "Charlie");
adicionaAluno(alunos, "Kyle", 57);
updateTable(alunos);