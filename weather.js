class Weather {
    constructor (lat, long) {
        this.apiKey = '0ba4dcbc19b2fbf104258b644a616d2b';
        this.lat = lat;
        this.long = long;
    }

    async getWeather() {
        const response = await fetch(`https://api.darksky.net/forecast/0ba4dcbc19b2fbf104258b644a616d2b/37.8267,-122.4233`);

        const responseData = await response.json();

        return responseData.weather;
    }

    changeLocation(lat, long) {
        this.lat = lat;
        this.long = long;
    }
}