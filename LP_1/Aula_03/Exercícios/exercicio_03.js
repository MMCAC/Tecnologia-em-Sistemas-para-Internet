var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();

// console.log('response head: ' + request.responseText );
var list = JSON.parse(request.responseText);
var quantidade = 0;
var list2 = [];

for(var i = 0; i < list.length; i++){
    if(list[i].currency == 'USD'){
        list2.push(list[i].name);
    }
}
// list2=list.filter(pais=>pais.currency=='USD');

list2.forEach(element => {
    console.log(element);
});
console.log(`A quantia de países usando USD seria de ${list2.length}.`);