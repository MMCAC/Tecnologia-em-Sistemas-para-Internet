/**
Exercício 2
Faça um programa que receba do usuário um vetor com 10
posições. Em seguida deverá ser impresso o maior e o menor
elemento do vetor.
 */

const prompt = require('prompt-sync')();

var vetor = [];
var menor = 0, maior = 0;

for(var x = 0; x < 10; x++)
{
    vetor[x] = Number(prompt("Informe um número: "));

    if(x == 0)
    {
        menor = vetor[x];
        maior = vetor[x];
    }
    if(x != 0)
    {
        if(vetor[x] > maior)
        {
            maior = vetor[x];
        }
        else if(vetor[x] < menor)
        {
            menor = vetor[x];
        }
    }
}

console.log("-------------------------------------");
console.log("O maior número é igual a "+maior+"!");
console.log("O menor númeor é igual a "+menor+"!");
console.log("-------------------------------------");