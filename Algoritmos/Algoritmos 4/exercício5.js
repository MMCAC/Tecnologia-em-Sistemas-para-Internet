/**
Exercício 4
Faça um programa para ler a nota da prova de 15 alunos e armazene um vetor, calcule e imprima a mmédia geral, maior nota e menor nota.
 */

const prompt = require('prompt-sync')();

var vetor = [], soma = 0, maior = 0, menor = 0;

for(var x = 0; x < 15; x++)
{
    vetor[x] = Number(prompt("Informe a nota do aluno: "));
    soma = soma + vetor[x];

    if(x == 0)
    {
        maior = vetor[x];
        menor = vetor[x];
    }
    else if(x != 0)
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

media = soma / 15;

console.log("A maior note é: "+ maior);
console.log("A menor note é: "+ menor);
console.log("A média das notas informadas é: "+ media);