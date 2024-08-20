//Usando CommonJS, crie um módulo que contém funções matemáticas básicas (soma, subtração, multiplicação, divisão) e exponenciação.  Em seguida, utilize essas funções em outro arquivo.

function soma(a,b) { 
    return a+b
 }

function subtração(a,b) {
    return a-b 
}

function multiplicação(a,b) {
    return a*b
}

function divisão(a,b) {
    if(b===0){
        console.log("Impossivel dividir por 0")
    }
    return a/b
}

function exponenciação(a,b) {
 return a**b
}

module.export = {soma,subtração,multiplicação,divisão,exponenciação}