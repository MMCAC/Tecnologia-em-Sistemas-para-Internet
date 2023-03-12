const prompt = require("prompt-sync")();

const salario = prompt("Informe o seu salário: ");

const final = salario* 1.15;

console.log("O salário inicial é de: ".concat(salario)+"\nO salário final é de: ".concat(final)+".");