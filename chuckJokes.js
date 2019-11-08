
var items = [];

fetch("https://api.icndb.com/jokes/random/3").then(function (res) {
 return res.json();
}).then(function (result) {
 items = result.value;
 console.log(items);
 document.getElementById('h').innerHTML ="A. " + items[0].joke;
 document.getElementById('i').innerHTML = "B. " + items[1].joke;
 document.getElementById('j').innerHTML = "C. " + items[2].joke;
}),
function (error) {
 console.log(error);
};