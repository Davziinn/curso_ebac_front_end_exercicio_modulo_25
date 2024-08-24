const alunos = [
    { nome: "Davi", nota: 10 },
    { nome: "Gian", nota: 3.4 },
    { nome: "Alisha", nota: 5.2 },
    { nome: "Natália", nota: 1000 },
    { nome: "Pedro", nota: 1 }
];

const filtrarAprovados = (alunos) => {
    return alunos.filter(alunos => alunos.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);

console.log(aprovados)