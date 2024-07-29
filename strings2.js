//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

const nomeCompleto = prompt('Seu nome: ')

const nomes = nomeCompleto.split(' ')
 console.log(`Primeiro nome: ${nomes[0]}`)
 console.log(`Segundo nome: ${nomes[nomes.length - 1]}`)
