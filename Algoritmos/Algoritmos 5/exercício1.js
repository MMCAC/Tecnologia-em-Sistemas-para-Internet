/**
Exercício 1
Ler uma matriz 4x5 de reais, calcular e imprimir a soma de todos os
seus elementos. 
 */

const prompt = require('prompt-sync')();

var matriz = [], soma = 0;

for(var x = 0; x < 4;  x++)
{
    matriz[x] = [];
}

for(var l = 0; l < matriz.length; l++)
{
    for(var c = 0; c < 5; c++)
    {
        matriz[l][c] = Number(prompt("Informe um número: "));
        soma = matriz[l][c] + soma;
    }
}


console.log("A soma de todos os elementos da matriz informada é de: "+soma);