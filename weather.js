class Weather {
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a12cd703b3ed57eaf26d91c5cdf4c80a`);

        const responseData = await response.json();

        return responseData.weather;
    }
}