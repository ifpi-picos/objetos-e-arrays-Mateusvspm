//Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18

const pessoas = [
    {nome:'Mateus', idade:18},
    {nome:'Emanuel', idade:45},
    {nome:'Aldenia', idade:45},
    {nome:'Maria', idade:18},
    {nome:'Francisco', idade:8}
]

const maior = pessoas.find(function(pessoas){
    return pessoas.idade > 18
})

console.log(maior)

