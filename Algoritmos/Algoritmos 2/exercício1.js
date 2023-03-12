/**1) Faça um algoritmo que leia 2 números e informe o maior deles.**/
const prompt = require('prompt-sync')();

var numero1, numero2;

numero1 = Number(prompt("Informe um número qualquer: "));
numero2 = Number(prompt("Informe outro número qualquer: "));

if(numero1 > numero2)
    {
        console.log("O número "+ numero1 +" é maior que o número "+numero2+".");
    }
    else if (numero1 < numero2)
        {
            console.log("O número "+ numero2 +" é maior que o número "+numero1+".");
        }
        else
        {
            console.log("Os números são iguais!");
        }