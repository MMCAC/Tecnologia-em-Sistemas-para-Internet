/**
Criar um algoritmo que leia os elementos de uma matriz inteira 5 x 5 e escreva se ela é triangular ou não.
 */

const prompt = require('prompt-sync')();

var matriz = [], baixo = 0, cima = 0;

for(var x = 0; x < 5;  x++)
{
    matriz[x] = [];
}

for(var l = 0; l < matriz.length; l++)
{
    for(var c = 0; c < 5; c++)
    {
        matriz[l][c] = Number(prompt("Informe um número: "));
    }
}

for(var l = 0; l < matriz.length; l++)
{
    for(var c = 0; c < 5; c ++)
    {
        if(c < l)
        {
            baixo = baixo + matriz[l][c];
        }
        if(c > l)
        {
            cima = cima + matriz[l][c];
        }  
    }
}

if(baixo == 0 || cima == 0)
{
    console.log("A matriz tratada é uma matriz triangular!");
}
else{
    console.log("A matriz tratada não é uma matriz triangular!");
}