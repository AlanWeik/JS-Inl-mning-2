// Foursquare
const clientId = "EN5DJDGHU5COJS5BSROVHN0DYKHCGRGJ0FSWAJZC3TS0GT5T";
const clientSecret = "PCK5DQLXAJ1H4LZKRF5T3M2ERT2LK3IXW2FRYTXMYPDZ53ZY";
const url = "https://api.foursquare.com/v2/venues/explore?near=";

// Openweather
const openWeatherKey = "130c1f0ea968fc82e4f1a6eb80ca25e3"
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Our FourSquare city-info fetcher.
const getVenues = async () => 
{
  const city = $input.val();
  const urlToFetch =
    url +
    city +
    "&limit=10&client_id=" +
    clientId +
    "&client_secret=" +
    clientSecret +
    "&v=20210215";
  try 
  {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;
    }
  } catch (err) 
  {
    console.log(error);
  }
};

// Our weather-fetcher.
const getForeCast = async () => 
{
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) 
    {
      console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  } catch (error) 
  {
    print("There was an error.");
    console.log(error);
  }
};

const renderVenues = (venues) => 
{
  $venueDivs.forEach(($venue, index) => 
  {
    const venue = venues[index];

    let venueContent = createVenueHTML(venue.name, venue.location);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForeCast = (day) => 
{
  let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

// Makes our search possible.
const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then((venues) => {
    return renderVenues(venues);
  });
  getForeCast().then((forecast) => {
    renderForeCast(forecast);
  });
  return false;
};

$submit.click(executeSearch);