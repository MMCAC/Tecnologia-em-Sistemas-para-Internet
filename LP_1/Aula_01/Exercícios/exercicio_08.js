const prompt = require('prompt-sync')();

function findMax(args){
    console.log(args);
    const max = Math.max(...args);

    return `The max number in the array is ${max}`;
}

let array = [];
console.log("Informe 5 números: ")
for(var i = 0; i < 5; i++){
    array[i] = parseInt(prompt());
}

console.log(findMax(array));