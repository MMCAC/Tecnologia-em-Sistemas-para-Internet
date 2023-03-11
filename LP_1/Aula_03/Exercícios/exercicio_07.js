//npm i xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();

// console.log('response head: ' + request.responseText );
var list=JSON.parse(request.responseText);
var list2 = [];

for(var i = 0; i < list.length; i++){
    if(list[i].name.length > 5){
        list2[i] = list[i].name;
    }
}

list2.forEach(element => {
    console.log(element);
});