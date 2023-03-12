/**
Exercício 1
Leia um vetor de 10 posições. Contar e escrever quantos valores
pares ele possui.
 */

const prompt = require('prompt-sync')();

var vetor = [];
var pares = 0;

for(var x = 0; x < 10; x++)
{
    vetor[x] = Number(prompt("Informe um número qualquer: "));
    if(vetor[x]%2 == 0)
    {
        pares = pares + 1; 
    }
}

console.log("A quantidade de números pares foi de "+ pares + "!");