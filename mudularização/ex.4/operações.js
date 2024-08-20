//Usando Módulos JavaScript, crie um módulo que contém funções matemáticas básicas (soma, subtração, multiplicação, divisão) e exponenciação.  Em seguida, utilize essas funções em outro arquivo.

export function soma(a,b) { 
    return a+b
 }

 export function subtração(a,b) {
    return a-b 
}

export function multiplicação(a,b) {
    return a*b
}

export function divisão(a,b) {
    if(b===0){
        console.log("Impossivel dividir por 0")
    }
    return a/b
}

export function exponenciação(a,b) {
 return a**b
}
