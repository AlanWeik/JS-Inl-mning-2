let button = document.querySelector('.button')
let inputValue = document.querySelectorAll('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

//const inputValue = 'London';
const apiKey = "130c1f0ea968fc82e4f1a6eb80ca25e3";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;



button.addEventListener('click',function(){
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

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