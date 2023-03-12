/**
Exercício 1
Faça um algoritmo que contenha uma função que recebe por parâmetro
um valor inteiro e positivo e retorna o valor lógico Verdadeiro (true) caso
o valor seja primo e Falso (false) em caso contrário.
 */

const prompt = require('prompt-sync')();

function primo(a)
{
    var numero = a;
    var cont = 0;

    for(var x = 1; x < a + 1; x++)
    {
        if(numero%x == 0)
        {
            cont = cont + 1;
        }
    }

    if(cont == 2)
    {
        return true;
    }
    else if(cont > 2)
    {
        return false;
    }
    
}

var num = Number(prompt("Informe um número: "));
var conferir = primo(num);

if(conferir == true)
{
    console.log("O número é primo!");
}
else if(conferir == false)
{
    console.log("O número não é primo!");
}