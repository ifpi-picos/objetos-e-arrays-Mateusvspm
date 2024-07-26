//Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros =[
    {Carro:'Toyota Corolla', Ano:2020},
    {Carro:'Honda Civic',  Ano:2019},
    {Carro:'Ford Mustang', Ano:1964},
    {Carro:'Porsche 911', Ano:1964}
]

const fabri=carros.filter(function(carros){
    return carros.Ano > 2010
})

console.log(fabri)