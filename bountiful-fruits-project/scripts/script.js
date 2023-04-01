const modEl = document.querySelector(".update");
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayDirectory(data);
}

getDirectoryData()

const displayDirectory = (fruits) => {
    const selects = document.querySelector("select.fruit-select");
    const select1 = document.querySelector("select.fruit-select1");
    const select2 = document.querySelector("select.fruit-select2");
    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        let option1 = document.createElement("option");
        let option2 = document.createElement("option") 
        option.textContent = `${fruit.name}`;
        option1.textContent = `${fruit.name}`;
        option2.textContent = `${fruit.name}`;


        selects.appendChild(option);
        select1.appendChild(option1);
        select2.appendChild(option2);
    })
}

// const


// Last modified
const lastModifiedDate = new Date(document.lastModified)

let modYear = lastModifiedDate.getFullYear();
let modDay = lastModifiedDate.getDay();
let modMonth = lastModifiedDate.getMonth();
let modminute = lastModifiedDate.getMinutes();
let modsecond = lastModifiedDate.getSeconds()
let modhour = lastModifiedDate.getHours(); 


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
let copyYear = `${year} .:|:. Richard O. Ogboanoh .:|:. Nigeria`
document.querySelector(".copy").textContent = copyYear;
modEl.innerHTML = `Last Updated: ${modMonth}/${modDay}/${modYear}`;

// const juice = document.querySelector("#juice");

// let submitCount = Number(window.localStorage.getItem("submitCount")); 

// // determine if this is the first visit or display the number of visits.
// if (submitCount !== 0) {
// 	juice.textContent = submitCount;
// } else {
// 	juice.textContent = `This is your first visit!`;
// }


// submitCount++;
// localStorage.setItem("submitCount", submitCount);

// Get the number of times the form has been submitted
const juice = document.querySelector("#juice");
// Get the number of times the form has been submitted
let submitCount = localStorage.getItem('submitCount');

// If it's the first time the form is being submitted by the user, set the count to 0
if (!submitCount) {
  localStorage.setItem('submitCount', 0);
  juice.innerHTML = `You have not made any fruit juice`;
}

// Get the submit button element
const submitButton = document.getElementById('submit-button');

juice.innerHTML = `You have made ${submitCount} fruit juice`;
// Add a click event listener to the submit button
submitButton && (submitButton.addEventListener('click', function() {
  // Increment the submitCount when the user clicks the submit button
  submitCount++;
}));

// Get the submitCount from localStorage
// let submit = localStorage.getItem('submitCount');

// Display the submitCount on the page
submitButton && (submitButton.textContent = submitCount);

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=0bd19d55bfadd336edf90cb971181d59";
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionHumidity = document.querySelector("figcaption");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); //this is for testing the call
            displayResults(data)
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
}


apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humidity = `${weatherData.main.humidity}%`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    captionHumidity.textContent = humidity
}