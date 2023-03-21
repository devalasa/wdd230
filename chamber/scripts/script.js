const windSpeed = document.querySelector("#wind_speed");
const temperature = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather_icon");
const captionDesc = document.querySelector("figcaption");
const weather_url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=0bd19d55bfadd336edf90cb971181d59";
const directoryURL = ""

async function weatherFetch() {
	try {
		const response = await fetch(weather_url);
		if (response.ok) {
			const data = await response.json();
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

weatherFetch();

function displayResults(weatherData) {
	temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
	windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;

	const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
	const desc = weatherData.weather[0].description;
	const weatherLocation = weatherData.name

	weatherIcon.setAttribute("src", iconsrc);
	weatherIcon.setAttribute("alt", desc);
	captionDesc.textContent = `${weatherLocation} - ${desc}`; 
}

const windchill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16)));

if (temperature <= 50 && windSpeed > 3) {
    document.querySelector("#wind_chill").innerHTML = `${windchill}&deg;C`;
}


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

const date = daynames;
if (date == "Monday" || date == "Tuesday") {
    document.querySelector(".banner").style.display = "block";
}else {
    document.querySelector(".hide").style.display = "none";
};

    document.querySelector("#hex").addEventListener("click", function() {
        document.querySelector(".hide").style.display = "none";

});


