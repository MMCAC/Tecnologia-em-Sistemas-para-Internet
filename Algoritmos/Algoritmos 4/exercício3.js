/*
Exercício 3
Escreva um programa que leia 10 números inteiros e os armazene
em um vetor. Imprima o vetor, o maior elemento e a posição que
ele se encontra.
*/
const prompt = require("prompt-sync")();

var vetor = [];
var maior = 0, posição = 0;

for(var x = 0; x < 10; x++)
{
    vetor[x] = Number(prompt("Informe um número: "));

    if(x == 0)
    {
        maior = vetor[x];
        posição = x + 1;
    }
    if(x != 0)
    {
        if(vetor[x] > maior)
        {
            maior = vetor[x];
            posição = x + 1;
        }
    }
}

console.log("O maior número é o número "+maior+", o qual se encontra na posição "+posição+" do vetor!");