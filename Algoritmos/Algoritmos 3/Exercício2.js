const prompt = require('prompt-sync')();

/**
A série de Fibonacci é formada pela sequência:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …
Escreva um algoritmo que gere a série de FIBONACCI até o N-ésimo termo.
 */

var a1 = 1; a2 = 1, numero = 0, y = 0;

numero = Number(prompt("Informe até qual posição da sequência de Fibonacci você gostaria de ir: "));

console.log(a1);
console.log(a2);

for(var x = 0; x <= numero-3; x++)
{
    y = a1 + a2;

    console.log(y);

    a1 = a2;
    a2 = y;
}