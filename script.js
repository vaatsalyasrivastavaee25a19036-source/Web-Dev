const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=Delhi';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f5a0d4179dmsh8b596be9b152467p167db7jsn39bdac8f9de2',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weatherapi-com.p.rapidapi.com/alerts.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            location.innerHTML = response.location.name
            region.innerHTML = response.location.region
            country.innerHTML = response.location.country
            lat.innerHTML = response.location.lat
            lon.innerHTML = response.location.lon
            tz_id.innerHTML = response.location.tz_id
            localtime_epoch.innerHTML = response.location.localtime_epoch
            localtime.innerHTML = response.location.localtime
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")


const getWeather1 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/alerts.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            
            city1Name.innerHTML = response.location.name;
            city1Region.innerHTML = response.location.region;
            city1Country.innerHTML = response.location.country;
            city1Lat.innerHTML = response.location.lat;
            city1Lon.innerHTML = response.location.lon;
            city1Tz_id.innerHTML=response.location.tz_id;
            city1Localtime_epoch.innerHTML=response.location.localtime_epoch;
            city1Localtime.innerHTML=response.location.localtime;
        })
        .catch((err => console.error(err)));
};
getWeather1("shanghai");


const getWeather2 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/alerts.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            
            city2Name.innerHTML = response.location.name;
            city2Region.innerHTML = response.location.region;
            city2Country.innerHTML = response.location.country;
            city2Lat.innerHTML = response.location.lat;
            city2Lon.innerHTML = response.location.lon;
            city2Tz_id.innerHTML=response.location.tz_id;
            city2Localtime_epoch.innerHTML=response.location.localtime_epoch;
            city2Localtime.innerHTML=response.location.localtime;
        })
        .catch((err => console.error(err)));
};
getWeather2("Armenia");


const getWeather3 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/alerts.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            
            city3Name.innerHTML = response.location.name;
            city3Region.innerHTML = response.location.region;
            city3Country.innerHTML = response.location.country;
            city3Lat.innerHTML = response.location.lat;
            city3Lon.innerHTML = response.location.lon;
            city3Tz_id.innerHTML=response.location.tz_id;
            city3Localtime_epoch.innerHTML=response.location.localtime_epoch;
            city3Localtime.innerHTML=response.location.localtime;
        })
        .catch((err => console.error(err)));
};
getWeather3("Russia");
