//npm i xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://kitsu.io/api/edge/anime";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();

// console.log('response head: ' + request.responseText );
var list=JSON.parse(request.responseText);
list = list.data;


list.forEach(element => {

    console.log('Nome: '+ element.attributes.canonicalTitle + '. Episódios: '+ element.attributes.episodeCount);

});