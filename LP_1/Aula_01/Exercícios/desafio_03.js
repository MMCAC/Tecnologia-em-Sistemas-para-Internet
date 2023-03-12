const prompt = require("prompt-sync")();

const n = prompt("informe um número:");

console.log("\nTabuada:");

for(let i = 0; i < 11; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}