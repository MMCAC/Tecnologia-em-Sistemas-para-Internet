/**2) Construa um algoritmo que leia 4 notas e mostre a situação final do aluno, onde:
– Aprovado: média >= 7
– Reprovado: média < 7
**/
const prompt = require('prompt-sync')();

var nota1, nota2, nota3, nota4, media;

nota1 = Number(prompt("Informe a primeira nota: "));

nota2 = Number(prompt("Informe a segunda nota: "));

nota3 = Number(prompt("Informe a terceira nota: "));

nota4 = Number(prompt("Informe a quarta nota: "));

media = (nota1 + nota2 + nota3 + nota4)/4;

if(media >= 0 && media <= 10)
{
    if(media >= 7)
    {
        console.log("Aprovado: média >= 7 !!!!\nMédia: "+media+".");
    }
    else
    {
        console.log("Reprovado: média < 7 !!!!\nMédia: "+media+".");
    }
}
else{
    console.log("Informe notas válidas!");
}