//Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.

function nomeComp(){
    let name = prompt('Seu nome: ')

    let primeiroNome = name.split(' ')
    
    console.log(`Primeiro nome: ${primeiroNome[0]} `)
}

nomeComp()