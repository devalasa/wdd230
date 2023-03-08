function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const menu = document.getElementById('hamburgerBtn');
menu.onclick = toggleMenu;

// Long hand method ... building day and month names from built-in date methods.
let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
let months = [
	"Jan",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = `${dayName}, ${monthName} ${d.getDate()}, ${year}`;
document.querySelector(".date").textContent = fulldate;
let lastUpdate = `Last updated: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;
let copyYear = `${year} .:|:. Richard O. Ogboanoh .:|:. Nigeria`
document.querySelector(".copy").textContent = copyYear;
document.querySelector(".update").textContent = lastUpdate;


//WEATHER!
const windSpeed = document.querySelector("#wind_speed");
const windchill = document.querySelector("#wind_chill");
const temperature = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather_icon")
const locationWeather = document.querySelector("#location_weather")
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=9759bf8ad638b8f6a851effbef8116f6";
const btn = document.querySelector("#hex");
const banner = document.querySelector(".banner");


async function getWeather(){
    const weatherFetch = await fetch(weatherURL);
    const weatherJson = await weatherFetch.json();
    const windSpeedjson = weatherJson.wind.speed;
    const temperatureC = weatherJson.main.temp;
    
    const weatherLocation = weatherJson.name;
    const weatherType = weatherJson.weather[0].main;

    temperature.textContent = Math.round(temperatureC)
    windSpeed.textContent = windSpeedjson
    locationWeather.textContent = `${weatherLocation} - ${weatherType}`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherJson.weather[0].icon}.png`);
}

function calcChill(){
    const mph = Number(windSpeed.textContent) / 1.609;
    const fahrenheit = (Number(temperature.textContent) * (9/5)) + 32;
    // (<=50°F and >3.0mph)
    if((mph > 3) && (fahrenheit <= 50)){
        const value = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16));
        windchill.textContent = `${Math.round(value)}°F`;
    }else{
        windchill.textContent = "N/A";
    }
}


getWeather();
calcChill();

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
    console.log("It works")
} else {
    visitsDisplay.textContent = `This is your first visit!`;
    console.log("This is your first visit!")
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);