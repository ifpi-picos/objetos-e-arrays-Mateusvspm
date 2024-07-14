const aluno = {
    nome:'Mateus',
    idade:18,
    curso:'Ads',
    notas:[7,7,8,10]
}

// console.log(aluno)
for (let propriedade in aluno){
    console.log(propriedade, aluno[propriedade]);
}