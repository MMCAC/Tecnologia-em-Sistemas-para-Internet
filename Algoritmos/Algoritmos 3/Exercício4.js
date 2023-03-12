const prompt = require('prompt-sync')();

/*
"Construa um algoritmo que receba um número e verifique se ele é um número triangular. (Um número é triangular quando é resultado do produto de três números consecutivos. Exemplo: 24 = 2 x 3 x 4)"
*/

var num = Number(prompt("Informe um número: "));

for(var x = 0; x < num; x++)
{
    if(num % (x+1) == 0)
    {
        var estima = (x+1) * (x+2) * (x+3);
        if(num == estima)
        {
            console.log("O número inserido é um número triangular!");
        }
    }
}