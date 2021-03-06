// Här skriver vi ut vår hämtade data i våra färdiga mallar. 

const createVenueHTML = (name, location) => 
{
  return `<h2>${name}</h2>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.city}</p>
    <p>${location.country}</p>`;
};

const createWeatherHTML = (currentDay) => 
{
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${currentDay.main.temp}&deg;F</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
      <h2>Windspeed: ${currentDay.wind.speed} m/s</h2>`;
};
