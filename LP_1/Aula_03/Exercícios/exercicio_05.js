//npm i xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();

// console.log('response head: ' + request.responseText );
var list=JSON.parse(request.responseText);

for(var i = 0; i < list.length; i++){
    console.log(`País: ${list[i].name}. Capital: ${list[i].capital}`);
}