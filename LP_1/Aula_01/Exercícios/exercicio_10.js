const prompt = require('prompt-sync')();

function factorial(number){
    var fatorial = 1;
    for(var i = number; i > 0; i--){
        fatorial *= i;
    }
    return `O fatorial do número ${number} é ${fatorial}!`
}

const num = prompt("Informe um número: ")
console.log(factorial(num))