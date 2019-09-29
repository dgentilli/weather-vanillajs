class Weather {
  constructor(city, country) {
    //Note: I'm only using the API key in the code below becauase of the atypical nature of this app.
    //Since it is really just a front end app it does not lend itself well to use of env vars.
    //The API key is for a free, open source service, and does not present any opportunity for gain.
    //In a more robust application I would save this key to a .env file and include the .env in gitignore
    this.apiKey = "4009c3b496a9c5056b1a724c7b6ff5eb"; // imported in index.html
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //Change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
