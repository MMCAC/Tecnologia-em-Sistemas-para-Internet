const prompt = require("prompt-sync")();

const opcao = prompt("Qual opção de conversão:\n(1) F -> C.\n(2) C -> F.\nOpção: ");

const temp = prompt("Informe a temperatura: ")

const result = (opcao == 1)?(temp*9/5) + 32 : (temp-32)*5/9;

console.log("A sua temperatura convertida fica igual a ".concat(result)+" na outra escala termométrica.");