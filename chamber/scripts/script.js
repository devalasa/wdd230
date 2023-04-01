const windSpeed = document.querySelector("#wind_speed");
const temperature = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather_icon");
const captionDesc = document.querySelector("figcaption");
const weather_url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=0bd19d55bfadd336edf90cb971181d59";
const directoryUrl = "https://devalasa.github.io/wdd230/chamber/json/data.json";
const spot1 = document.getElementById("spot_1");
const spot2 = document.getElementById("spot_2");
const spot3 = document.getElementById("spot_3");
const weatherData = {
	"cod": "200",
	"message": 0,
	"cnt": 96,
	"list": [
	  {
		"dt": 1661875200,
		"main": {
		  "temp": 296.34,
		  "feels_like": 296.02,
		  "temp_min": 296.34,
		  "temp_max": 298.24,
		  "pressure": 1015,
		  "sea_level": 1015,
		  "grnd_level": 933,
		  "humidity": 50,
		  "temp_kf": -1.9
		},
		"weather": [
		  {
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		  }
		],
		"clouds": {
		  "all": 97
		},
		"wind": {
		  "speed": 1.06,
		  "deg": 66,
		  "gust": 2.16
		},
		"visibility": 10000,
		"pop": 0.32,
		"rain": {
		  "1h": 0.13
		},
		"sys": {
		  "pod": "d"
		},
		"dt_txt": "2022-08-30 16:00:00"
	  },
	  {
		"dt": 1661878800,
		"main": {
		  "temp": 296.31,
		  "feels_like": 296.07,
		  "temp_min": 296.2,
		  "temp_max": 296.31,
		  "pressure": 1015,
		  "sea_level": 1015,
		  "grnd_level": 932,
		  "humidity": 53,
		  "temp_kf": 0.11
		},
		"weather": [
		  {
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		  }
		],
		"clouds": {
		  "all": 95
		},
		"wind": {
		  "speed": 1.58,
		  "deg": 103,
		  "gust": 3.52
		},
		"visibility": 10000,
		"pop": 0.4,
		"rain": {
		  "1h": 0.24
		},
		"sys": {
		  "pod": "d"
		},
		"dt_txt": "2022-08-30 17:00:00"
	  },
	  {
		"dt": 1661882400,
		"main": {
		  "temp": 294.94,
		  "feels_like": 294.74,
		  "temp_min": 292.84,
		  "temp_max": 294.94,
		  "pressure": 1015,
		  "sea_level": 1015,
		  "grnd_level": 931,
		  "humidity": 60,
		  "temp_kf": 2.1
		},
		"weather": [
		  {
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		  }
		],
		"clouds": {
		  "all": 93
		},
		"wind": {
		  "speed": 1.97,
		  "deg": 157,
		  "gust": 3.39
		},
		"visibility": 10000,
		"pop": 0.33,
		"rain": {
		  "1h": 0.2
		},
		"sys": {
		  "pod": "n"
		},
		"dt_txt": "2022-08-30 18:00:00"
	  },
		
	  {
		"dt": 1662217200,
		"main": {
		  "temp": 294.14,
		  "feels_like": 293.99,
		  "temp_min": 294.14,
		  "temp_max": 294.14,
		  "pressure": 1014,
		  "sea_level": 1014,
		  "grnd_level": 931,
		  "humidity": 65,
		  "temp_kf": 0
		},
		"weather": [
		  {
			"id": 804,
			"main": "Clouds",
			"description": "overcast clouds",
			"icon": "04d"
		  }
		],
		"clouds": {
		  "all": 100
		},
		"wind": {
		  "speed": 0.91,
		  "deg": 104,
		  "gust": 1.92
		},
		"visibility": 10000,
		"pop": 0.53,
		"sys": {
		  "pod": "d"
		},
		"dt_txt": "2022-09-03 15:00:00"
	  }
	],
	"city": {
	  "id": 3163858,
	  "name": "Zocca",
	  "coord": {
		"lat": 44.34,
		"lon": 10.99
	  },
	  "country": "IT",
	  "population": 4593,
	  "timezone": 7200,
	  "sunrise": 1661834187,
	  "sunset": 1661882248
	}
  } 
const weatherForecast = weatherData.list.slice(0, 3);
console.log(weatherForecast);
const fillUpSpotlight = function(directory){
    let tempList = [];
    directory.forEach(company => {
        if((tempList.length < 3) || (company.membership == "Gold" || company.membership == "Silver")){
            tempList.push(company);
        };
    });
    spot1.innerHTML = 
    `
                <h4>${tempList[1].name}</h4>
                <img src="${tempList[1].logoURL}" alt="${tempList[1].name} logo">
                <p>${tempList[1].email}</p>
                <p>${tempList[1].phoneNumber}</p>
				<a href="${tempList[1].websiteURL}">${tempList[1].websiteURL}</a>`
    spot2.innerHTML = 
    `
                <h4>${tempList[2].name}</h4>
                <img src="${tempList[2].logoURL}" alt="${tempList[2].name} logo">
                <p class="highlight">${tempList[2].email}</p>
                <p>${tempList[2].phoneNumber}</p>
				<a href="${tempList[1].websiteURL}">${tempList[1].websiteURL}</a>`
    spot3.innerHTML = 
    `
                <h4>${tempList[3].name}</h4>
                <img src="${tempList[3].logoURL}" alt="${tempList[3].name} logo">
                <p>${tempList[3].email}</p>
                <p>${tempList[3].phoneNumber}</p>
				<a href="${tempList[1].websiteURL}">${tempList[1].websiteURL}</a>`
}

// Spotlight
async function getandshowSpotlight() {
    const response = await fetch(directoryUrl);
    const jsonObject = await response.json();
    const directory = jsonObject.directory;
	console.log(directory);
    fillUpSpotlight(directory);
    };

getandshowSpotlight();





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


