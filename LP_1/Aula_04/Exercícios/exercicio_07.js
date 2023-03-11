const uppercase = str => str.toUpperCase();
console.log(uppercase('teste'));

console.log(uppercase('teste').charAt(0));

console.log(uppercase('teste').substring(2));

console.log("Eu adoro programar em JavaScript na sexta-feira".substring(0,10)+"...");

console.log("diego".toUpperCase()[0] + "diego".substring(1));

arrWord = "Eu adoro programar em JavaScript na sexta-feira".split(" ");
for(let i = 0; i<arrWord.length;i++){
    arrWord[i] = arrWord[i].toUpperCase()[0]+arrWord[i].substring(1);
}
console.log(arrWord.join(" "));