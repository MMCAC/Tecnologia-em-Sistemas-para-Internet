const prompt = require('prompt-sync')();

/*
Escreva um algoritmo que um números e verifique se ele é ou não quadrado perfeito. (Um número é quadrado perfeito quando tem um número inteiro como raiz quadrada.)
*/

var numero, quantidade = 0, divisores = 0;

numero = Number(prompt("Informe um número: "));

for(var x = 0; x <= quantidade; x++)
{
    if(numero % (x + 1) == 0)
    {
        quantidade++;
        divisores++;
    }
    else if (x != numero)
    {
        quantidade++;
    }
}

if(divisores % 2 == 0)
{
    console.log("O número inserido não é um quadrado perfeito!");
    console.log(divisores);
}
else
{
    console.log("O número inserido é um quadrado perfeito!");
    console.log(divisores);
}