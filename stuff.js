let button = document.querySelector('.button');
let inputValue = docuemt.querySelector('.inputValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch(api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b0908bc610503bb11e6553779731e54b)
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("Couldn't find city, try again."))
}






























/*let locationIcon = document.querySelector('.weather-icon');
const {icon} = data.weather[0];

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

const { main, name, sys, weather } = data;
const icon = `https://openweathermap.org/img/wn/${
weather[0]["icon"]
}@2x.png`;

const li = document.createElement("li");
li.classList.add("city");
const markup = `
<h2 class="city-name" data-name="${name},${sys.country}">
<span>${name}</span>
<sup>${sys.country}</sup>
</h2>
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
</div>
<figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
</figure>
`;
li.innerHTML = markup;
list.appendChild(li);

msg.textContent = "";
form.reset();
input.focus();*/