class UI {
    constructor(location){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
    }

    render(weather) {
        // this.location.textContent = weather.name;
        this.desc.textContent = weather.description;
        this.string.textContent = weather.main;
        // this.details.textContent = `Minimum Temperatur: ${weather.main.temp_min} &nbsp; Maximum Temperature: ${weather.main.temp_max}`;
        this.icon = `http://openweathermap.org/img/w/${weather.weather.icon}.png`;
    }
}