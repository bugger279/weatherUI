// // init weather Class/object
// const weather = new Weather('37.8267', '-122.4233');

// let myHeader = new Headers();
// myHeader.append('Accept', 'application/json');
// myHeader.append('Content-Type', 'application/json');


// // init UI
// const ui = new UI();

// // Get Weather when DOM Loads fully
// document.addEventListener('DOMContentLoaded', getWeather);

// // weather.changeLocation('Tokyo', 'Japan');

// function getWeather() {
//     weather.getWeather()
//     // .then(results => console.log(results))
//     .then(results => ui.render(results))
//     .catch(err => console.log(err));
// }

window.addEventListener('load', ()=>{
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let degree = document.querySelector('.degree-section span');

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `${proxy}https://api.darksky.net/forecast/0ba4dcbc19b2fbf104258b644a616d2b/${lat},${long}`;

            // console.log(fetch(api));
            fetch(api)
                .then(response => {
                    // console.log(response.json());
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary, icon} = data.currently;
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;

                    // Set Icon
                    setIcons(icon,document.querySelector(".icon"));

                    degree.addEventListener('click', ()=> {
                        if (degree.textContent === 'F') {
                            degree.textContent = "C";
                            let celcius = (temperature - 32) * (5/9);
                            temperatureDegree.textContent = Math.floor(celcius);
                        } else {
                            degree.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });
                });
        });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({"color": "white"});
        // const clear-day
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        console.log(currentIcon)
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});