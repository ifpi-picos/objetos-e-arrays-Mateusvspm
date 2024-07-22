//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for tradicional.

let filmes = []

const quantidade = 5
let movies;

for(let i = 0; i<quantidade;i++){
    movies = prompt(`Digite o nome de um filme`)

    filmes.push(movies)
}

console.log(filmes)