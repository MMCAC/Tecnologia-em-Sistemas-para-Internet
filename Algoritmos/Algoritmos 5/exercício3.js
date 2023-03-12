/**
Criar um algoritmo que entre com valores inteiros para uma matriz m3x3
e imprima a matriz final, conforme mostrado a seguir:
"Girar 180"
 */
const prompt = require('prompt-sync')();

var matriz = [], matriz2 = [], matriz3 = [];

for(var x = 0; x < 3;  x++)
{
    matriz[x] = [];
}
for(var x = 0; x < 3;  x++)
{
    matriz2[x] = [];
}
for(var x = 0; x < 3;  x++)
{
    matriz3[x] = [];
}


for(var l = 0; l < matriz.length; l++)
{
    for(var c = 0; c < 3; c++)
    {
        matriz[l][c] = Number(prompt("Informe um número: "));
    }
}

for(var l = 0; l < matriz.length; l++)
{
    var sub = 1;

    for(var c = 0; c < 3; c++)
    {
        matriz2[l][c] = matriz[l][matriz[l].length-sub]
        sub = sub + 1;
    }
}

var sub = 1;

for(var l = 0; l < matriz.length; l++)
{
    matriz3[l] = matriz2[matriz.length - sub]
    sub = sub + 1;
}


for(var l = 0; l < matriz.length; l++)
{
    for(var c = 0; c < 3; c++)
    {
        console.log(matriz3[l][c]);
    }
    console.log("---");
}