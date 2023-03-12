/**
Exercício 4
Faça um algoritmo que contenha uma função que recebe 3 valores
inteiros por parâmetro e, utilizando à própria função, exibe no console os
valores ordenados em ordem crescente.
 */

const prompt = require('prompt-sync')();

function ordenandor(a, b, c)
{
    var num1 = a, num2 = b, num3 = c, vetor = [];
    
    if(num1 <= num2)
    {
        if(num3 > num2)
        {
            vetor = [num1, num2, num3];
        }
        else if(num3 <= num2)
        {
            if(num3 >= num1)
            {
                vetor = [num1, num3, num2];
            }
            else if(num3 < num1)
            {
                vetor = [num3, num1, num2];
            }
        }
    }
    else if(num1 > num2)
    {
        if(num3 <= num2)
        {
            vetor = [num3, num2, num1]
        }
        else if(num3 > num2)
        {
            if(num3 <= num1)
            {
                vetor = [num2, num3, num1];
            }
            else if(num3 > num1)
            {
                vetor = [num2, num1, num3];
            }
        }
    }

    console.log(vetor);
}

var leitor1 = Number(prompt("Informe um número: "));
var leitor2 = Number(prompt("Informe um número: "));
var leitor3 = Number(prompt("Informe um número: "));

var conf = ordenandor(leitor1, leitor2, leitor3);
