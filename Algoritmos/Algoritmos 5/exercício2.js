/**
Exercício 2
Criar um algoritmo que leia os elementos de uma matriz inteira 3 x 3 e
imprima o produto dos elementos que estão abaixo da diagonal
principal.
 */
const prompt = require('prompt-sync')();

var matriz = [], produto = 1;

for(var x = 0; x < 3;  x++)
{
    matriz[x] = [];
}

for(var l = 0; l < matriz.length; l++)
{
    for(var c = 0; c < 3; c++)
    {
        matriz[l][c] = Number(prompt("Informe um número: "));
        if(c < l)
        {
            produto = produto * matriz[l][c];
        }
    }
}

console.log("O produto dos elementos que se encontram abaixo da diagonal principal é igual a: "+produto);