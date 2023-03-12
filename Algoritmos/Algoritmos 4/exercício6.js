/**
 Tentando descobrir se um dado era viciado, um dono de cassino honesto (ha! ha! ha! ha!) o lançou n vezes. Dados os n resultados dos lançamentos, determinar o número de ocorrências de cada face.
 */

const prompt = require('prompt-sync')();

var vetor = [1, 2, 3, 4 , 5, 6];
var vetor_quantidade = [];
var vetor_contador = [0, 0, 0, 0, 0, 0];

n = Number(prompt("Informe a quantidade de vezes que o dado foi jogado: "));

for(var x = 0; x < n; x++)
{
    vetor_quantidade[x] = Math.floor(Math.random() * 6);
    console.log("O número sorteador é: "+ vetor_quantidade[x]);

    if(vetor_quantidade[x] == 1)
    {
        vetor_contador[0] = vetor_contador[0] + 1
    }
    else if(vetor_quantidade[x] == 2)
    {
        vetor_contador[1] = vetor_contador[1] + 1;
    }
    else if(vetor_quantidade[x] == 3)
    {
        vetor_contador[2] = vetor_contador[2] + 1;
    }
    else if(vetor_quantidade[x] == 4)
    {
        vetor_contador[3] = vetor_contador[3] + 1;
    }
    else if(vetor_quantidade[x] == 5)
    {
        vetor_contador[4] = vetor_contador[4] + 1;
    }
    else if(vetor_quantidade[x] == 6)
    {
        vetor_contador[5] = vetor_contador[5] + 1;
    }

    console.log("---------------------------------");
    
}

for(var x = 0; x < 6; x++)
{
    console.log("A quantidade de vezes que a face "+(x+1)+" foi tirada foi: "+vetor_contador[x]);
}