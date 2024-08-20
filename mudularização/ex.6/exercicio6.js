function calcularLogaritmo(base,numero){
    return Math.log(numero)/ Math.log(base);
   
   }
    const numero = Number (prompt("Digite o número que deseja descobrir o logaritmo:"));
    const base = Number(prompt("Digite a base do logaritmo:"));
   
    const resultadodaOperacao =calcularLogaritmo(base,numero);
    console.log(`O logaritmo de ${numero} na base ${base} é ${resultadodaOperacao}`);