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

