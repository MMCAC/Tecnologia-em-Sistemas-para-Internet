const prompt = require("prompt-sync")();

function isEven(num){
    if(num % 2 == 0)
    {
        return "O número é par!";
    } else {
        return "O número é ímpar!";
    }
}

const number = prompt("Informe um número: ");
console.log(isEven(number));