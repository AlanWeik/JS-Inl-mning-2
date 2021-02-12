var button = document.querySelector(".button");
//const input = document.querySelector("#searchbox");
var main = document.querySelector("#name");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

//let input = "London";
const apiKey = "130c1f0ea968fc82e4f1a6eb80ca25e3";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

function search() {
  const input = document.getElementById("searchbox").value;
  alert("Value inside is: " + input);
}

button.addEventListener("click", function () {
  search();
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      main.innerHTML = nameValue;
      temp.innerHTML = "Temp: " + tempValue + " C";
      desc.innerHTML = "Desc: " + descValue;
    })
    .catch((err) => alert("An error occurred."));
});

//-----------------------NEW JS API CALL---------------------------------------------

var button = document.querySelector(".button");
//const input = document.querySelector('.searchbox');
var main = document.querySelector("#name");
var near = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

const clientId = "EN5DJDGHU5COJS5BSROVHN0DYKHCGRGJ0FSWAJZC3TS0GT5T";
const clientSecret = "PCK5DQLXAJ1H4LZKRF5T3M2ERT2LK3IXW2FRYTXMYPDZ53ZY";
//const inputValue = document.querySelector('.searchbox');
const limit = 10;
const fourUrl = `https://api.foursquare.com/v2/venues/explore?client_id=${clientId}&client_secret=${clientSecret}&v=20210208&near=${input}&limit=${limit}`;

/*
fetch(fourUrl)
    .then(response => response.json())
    .then(data => {
    
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

main.innerHTML = nameValue;
temp.innerHTML = "Temp: "+tempValue+" C";
desc.innerHTML = "Desc: "+descValue;

});


    const inputVal = input.value;
});

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
