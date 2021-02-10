var button = document.querySelector('.button');
const input = document.querySelector('.searchbox');
var main = document.querySelector('#name');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

//const input = "Marbella";
const apiKey = "130c1f0ea968fc82e4f1a6eb80ca25e3";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;



button.addEventListener('click',function(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
    
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

main.innerHTML = nameValue;
temp.innerHTML = "Temp: "+tempValue+" C";
desc.innerHTML = "Desc: "+descValue;

})

.catch(err => alert("An error occurred."))
})


//-----------------------NEW JS API CALL---------------------------------------------


var button = document.querySelector('.button');
//const input = document.querySelector('.searchbox');
var main = document.querySelector('#name');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

const clientId = "EN5DJDGHU5COJS5BSROVHN0DYKHCGRGJ0FSWAJZC3TS0GT5T";
const clientSecret = "PCK5DQLXAJ1H4LZKRF5T3M2ERT2LK3IXW2FRYTXMYPDZ53ZY";
const fourUrl = `https://api.foursquare.com/v2/venues/explore&client_id=${clientId}&client_secret=${clientSecret}`;

button.addEventListener('click',function(){
    fetch(fourUrl)
    .then(response => response.json())
    .then(data => {
    
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

main.innerHTML = nameValue;
temp.innerHTML = "Temp: "+tempValue+" C";
desc.innerHTML = "Desc: "+descValue;

})

.catch(err => alert("An error occurred."))
})





/*
const form = document.querySelector(".top-banner form");
// Här fångar vi upp vad som skrivs i vårt form.
form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});

const apiKey = "b0908bc610503bb11e6553779731e54b";
const inputVal = input.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.text())
.then(data => {
    //Här ska det hända något med vår data, men vad? 
})
.catch(() => {
    msg.textContent = "Please search for a valid city :)";
});


msg.textContent = "";
form.reset();
input.focus();*/