/**
Exercício 3
Faça um algoritmo que contenha uma função que recebe um valor
inteiro e verifica se o valor é par ou ímpar. A função deve retornar um
valor booleano (true ou false). 
 */

const prompt = require('prompt-sync')();

function paridade(a)
{
    var numero = a;

    if(numero%2 == 0)
    {
        return true;
    }
    else if(numero%2 != 0)
    {
        return false;
    }
}

var numero = Number(prompt("Informe um número: "));
var conf = paridade(numero);

if(conf == true)
{
    console.log("O número é par!");
}
else if(conf == false)
{
    console.log("O númeor é ímpar!");
}