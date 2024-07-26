//Crie um array de números de 1 a 10 e use map para criar um novo array onde cada número é multiplicado por 2.

const numeros = [1,2,3,4,5,6,7,8,9,10]

const Xnum = numeros.map(function(numeros){
    return numeros*2
})

console.log(Xnum)