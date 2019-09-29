//Init storage object
const storage = new Storage();

//Get stored location
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location;
document.getElementById(`w-change-btn`).addEventListener("click", event => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  //Set location in local storage
  storage.setLocationData(city, country);

  //fetch weather again and re-paint the UI
  getWeather();

  //Close the Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
