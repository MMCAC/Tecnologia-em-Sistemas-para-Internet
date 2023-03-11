function filteredNumber(arr, callback){
    let filteredArr = [];

    arr.forEach(element => {
        callback(element)?filteredArr.push(element):filteredArr.push(); //Como fazer a parte esle do if lambda?
    })

    return filteredArr;
}

console.log(filteredNumber([1, 2, 3, 4, 5], (num) => num>2))