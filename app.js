// initi weather Class/object
const weather = new Weather();

weather.getWeather()
    .then(results => console.log(results))
    .catch(err => console.log(err));