const prompt = require('prompt-sync')();
/**
Criar um algoritmo que leia vários números e encerre a leitura com 0 e imprima o maior, o menor e a média aritmética dos números. O número 0 (zero) não faz parte da sequência
 */

var num, quantidade = 0, soma = 0, media, maior, menor;

for(var x = 0; x <= quantidade; x++)
{
    num = Number(prompt("Informe um número: "));

    if(num != 0)
    {
        quantidade++;
        soma = soma + num;

        if(x == 0)
        {
            maior = num;
            menor = num;
        }
        else if(x != 0)
        {
            if(num > maior)
            {
                maior = num;
            }
            else if(num < menor)
            {
                menor = num;
            }
        }
    if(num == 0)
    {
        x++;
    }
    }
}

media = soma / quantidade;

console.log("O maior número é: "+maior);
console.log("O menor número é: "+menor);
console.log("A média aritmética dos números é: "+media);