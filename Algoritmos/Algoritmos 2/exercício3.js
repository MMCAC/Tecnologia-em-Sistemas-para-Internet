/**3) Faça um algoritmo que leia um número N e imprima “F1”, “F2” ou “F3”, conforme a condição:
• “F1”, se N <= 10
• “F2”, se N > 10 e N <= 100
• “F3”, se n > 100
**/

const prompt = require('prompt-sync')();

var N;

N = Number(prompt("Informe um número: "));

if(N <= 10)
    {
        console.log("F1");
    } else if(N > 10 && N <= 100)
    {
        console.log("F2");
    } else if(N > 100)
    {
        console.log("F3");
    }