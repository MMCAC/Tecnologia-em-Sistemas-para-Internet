const prompt = require("prompt-sync")();

var nota;

const n1 = prompt("Nota 1: ");
const n2 = prompt("Nota 2: ");

nota = (parseFloat(n1)+parseFloat(n2)) / 2;
console.log("Sua nota final \u00E9 ".concat(nota));