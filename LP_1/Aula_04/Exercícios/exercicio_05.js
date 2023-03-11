const sumArray = arr => arr.reduce((total, num) => total + num, 0);
console.log(sumArray([1, 2, 3, 4, 5]));

const sumArray2 = function(arr){
    let soma = 0;
    for(posi in arr){
        soma += arr[posi];
    }
    return soma;
}
console.log(sumArray2([1, 2, 3, 4, 5]));