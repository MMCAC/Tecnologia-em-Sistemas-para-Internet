const prompt = require('prompt-sync')();

var idadeAnos, idadeMeses, idadeDias;
var idadeFinal;

idadeAnos = Number(prompt('Informe a sua idade em Anos: '));
idadeMeses = Number(prompt('Informe a sua idade em Meses: '));
idadeDias = Number(prompt('Informe a sua idade em Dias: '));

idadeFinal = idadeAnos*365 + idadeMeses*30 + idadeDias;

console.log("Sua idade em dias é: " + idadeFinal);
