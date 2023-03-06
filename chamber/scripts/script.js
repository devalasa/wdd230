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
const spot1 = document.getElementById("spot1");
const spot2 = document.getElementById("spot2");
const spot3 = document.getElementById("spot3");
const directoryUrl = "https://kelvin-aj.github.io/wdd230/chamber/json/data.json";
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

const fillUpSpotlight = function(directory){
    let tempList = [];
    directory.forEach(company => {
        if((tempList.length < 3) || (company.membership == "Gold" || company.membership == "Silver")){
            tempList.push(company);
        };
    });
    spot1.innerHTML = 
    `
                <h2>${tempList[1].name}</h2>
                <img src="${tempList[1].logoURL}" alt="${tempList[1].name} logo">
                <hr>
                <p>${tempList[1].email}</p>
                <p>${tempList[1].phoneNumber} | ${tempList[1].websiteURL}</p>`
    spot2.innerHTML = 
    `
                <h2>${tempList[2].name}</h2>
                <img src="${tempList[2].logoURL}" alt="${tempList[2].name} logo">
                <hr>
                <p>${tempList[2].email}</p>
                <p>${tempList[2].phoneNumber} | ${tempList[2].websiteURL}</p>`
    spot3.innerHTML = 
    `
                <h2>${tempList[3].name}</h2>
                <img src="${tempList[3].logoURL}" alt="${tempList[3].name} logo">
                <hr>
                <p>${tempList[3].email}</p>
                <p>${tempList[3].phoneNumber} | ${tempList[3].websiteURL}</p>`
}


// Spotlight
async function getandshowSpotlight() {
    const response = await fetch(directoryUrl);
    const jsonObject = await response.json();
    const directory = jsonObject.directory;
    fillUpSpotlight(directory);
    };

getandshowSpotlight();

getWeather();
calcChill();
