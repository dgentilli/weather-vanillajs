class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.temp = document.getElementById("w-string");
    //Define Icon in the paint method below.
    this.humidity = document.getElementById("w-humidity");
    this.minTemp = document.getElementById("w-min-temp");
    this.maxTemp = document.getElementById("w-max-temp");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country} `;
    this.desc.textContent = weather.weather[0].main;
    this.temp.textContent = `${weather.main.temp} Celsius `;
    this.icon = document
      .getElementById("w-icon")
      .setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
      );
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.maxTemp.textContent = `High: ${weather.main.temp_max} C`;
    this.minTemp.textContent = `Low: ${weather.main.temp_min} C`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s / ${
      weather.wind.deg
    } degrees`;
  }
}
