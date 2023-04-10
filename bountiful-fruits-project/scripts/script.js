const modEl = document.querySelector(".update");
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayDirectory(data);
}

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const menu = document.getElementById('hamburgerBtn');
menu.onclick = toggleMenu;

getDirectoryData()

const displayDirectory = (fruits) => {
    const selects = document.querySelector("select.fruit-select");
    const select1 = document.querySelector("select.fruit-select1");
    const select2 = document.querySelector("select.fruit-select2");

    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        let option1 = document.createElement("option");
        let option2 = document.createElement("option"); 
        option.textContent = `${fruit.name}`;
        option1.textContent = `${fruit.name}`;
        option2.textContent = `${fruit.name}`;

        selects.appendChild(option);
        select1.appendChild(option1);
        select2.appendChild(option2);

    const freshPage = document.querySelector("#fresh-page");
    const firstName = document.getElementById('fname-display');
    const lastName = document.getElementById('lname-display');
    const phoneN = document.getElementById('phone-display');
    const submitBtn = document.getElementById("submit-button");
    const FruitDisplay = document.getElementById("fruit-display1");
    const FruitDisplay1 = document.getElementById("fruit-display2");
    const FruitDisplay2 = document.getElementById("fruit-display3");
    const instructions = document.getElementById("instructions-display");
        submitBtn.addEventListener("click", (fruit) => {
            fruit.preventDefault();
            
            const fName = document.getElementById('fname').value;
            const lName = document.getElementById('lname').value;
            const phone = document.getElementById('phone').value;
            const selectValue = document.querySelector("select.fruit-select").value;
            const selectValue1 = document.querySelector("select.fruit-select1").value;
            const selectValue2 = document.querySelector("select.fruit-select2").value;
            const inst = document.querySelector(".instructions").value;
            firstName.textContent = `First Name: ${fName}`;
            lastName.textContent = `Last Name: ${lName}`;
            phoneN.textContent = `Phone: ${phone}`;
            FruitDisplay.textContent = `Fruit 1: ${selectValue}`;
            FruitDisplay1.textContent = `Fruit 2: ${selectValue1}`;
            FruitDisplay2.textContent = `Fruit 3: ${selectValue2}`;
            instructions.textContent = `Instructions: ${inst}`;
            fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
            .then(response => response.json())
              .then(data => {
                  // Calculate the total nutritions based on the selected fruits
                  const selectedFruitNutrient = {
                      carbohydrates: 0,
                      protein: 0,
                      fat: 0,
                      calories: 0,
                      sugar: 0,
                  }
                  
                  const selectedFruits = [selectValue, selectValue1, selectValue2];
                  data.forEach(fruit => {
                  if (selectedFruits.includes(fruit.name)) {
                      selectedFruitNutrient.carbohydrates += fruit.nutritions.carbohydrates;
                      selectedFruitNutrient.protein += fruit.nutritions.protein;
                      selectedFruitNutrient.fat += fruit.nutritions.fat;
                      selectedFruitNutrient.calories += fruit.nutritions.calories;
                      selectedFruitNutrient.sugar += fruit.nutritions.sugar;
                      }
                const carbohydrates = document.querySelector("#carbohydrate"); 
                const protein = document.querySelector("#protein");
                const fat = document.querySelector("#fat");
                const calories = document.querySelector("#calories");
                const sugar = document.querySelector("#sugar");
                carbohydrates.innerHTML = `Carbohydrates: ${selectedFruitNutrient.carbohydrates.toFixed(2)}`;
                protein.innerHTML = `Protein: ${selectedFruitNutrient.protein.toFixed(2)}`;
                fat.innerHTML = `Fat: ${selectedFruitNutrient.fat.toFixed(2)}`;
                calories.innerHTML = `Calories: ${selectedFruitNutrient.calories.toFixed(2)}`;
                sugar.innerHTML = `Sugar: ${selectedFruitNutrient.sugar.toFixed(2)}`;
                  })
                  });

  });
    })
}



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
document.querySelector("#date").textContent = `Order Date: ${fulldate}`;
let copyYear = `${year} .:|:. Bountiful Foods .:|:. Nigeria`
document.querySelector(".copy").textContent = copyYear;
modEl.innerHTML = `Last Updated: ${modMonth}/${modDay}/${modYear}`;

const juice = document.querySelector("#juice");
const submitBtn = document.querySelector("#submit-button");
let submitCount = Number(window.localStorage.getItem("submitCount")); 


submitBtn && (submitBtn.addEventListener("click", function() {
// determine if this is the first visit or display the number of visits.
    submitCount++;
    localStorage.setItem("submitCount", submitCount);
}))


// Get the submitCount from localStorage
// let submit = localStorage.getItem('submitCount');

// Display the submitCount on the page
const juice1 = document.querySelector("#juice1");

if (juice1 !== 0) {
    juice1.innerHTML = `You have made ${submitCount} fruit juice`
} else {
    juice1.innerHTML = `Make a fruit juice now`
}
submitBtn && (submitBtn.textContent = submitCount);

const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=0bd19d55bfadd336edf90cb971181d59";
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherIcon1 = document.querySelector("#weather-icon1");
const weatherIcon2 = document.querySelector("#weather-icon2");
const weatherIcon3 = document.querySelector("#weather-icon3");
const captionHumidity = document.querySelector("figcaption");
const captionDesc = document.querySelector("figcaption");
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3")
const captionDay1 = document.querySelector("figcaption");
const captionDay2 = document.querySelector("figcaption");
const captionDay3 = document.querySelector("figcaption");



async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //this is for testing the call
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
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    temp1.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
    temp2.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
    temp3.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(0)}</strong>`;
    // temp1.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    const desc1 = weatherData.list[0].weather[0].description;
    const desc2 = weatherData.list[0].weather[0].description;
    const desc3 = weatherData.list[0].weather[0].description;
    const humidity = `Humidity: ${weatherData.list[0].main.humidity}%`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherIcon1.setAttribute("src", iconsrc1);
    weatherIcon1.setAttribute("alt", desc1);
    weatherIcon2.setAttribute("src", iconsrc2);
    weatherIcon2.setAttribute("alt", desc2);
    weatherIcon3.setAttribute("src", iconsrc3);
    weatherIcon3.setAttribute("alt", desc3);
    captionDesc.textContent = desc;
    captionHumidity.textContent = humidity
}

const imagesToLoad = document.querySelectorAll("source[srcset]");

const loadImage = image => {
    image.parentNode.classList.add("view");
    image.onload = () => {
        image.parentNode.classList.remove("noview");
    }
};
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
}

const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
        if(item.isIntersecting) {
            loadImage(item.target);
            observer.unobserve(item.target);
        }
    })
}, imgOptions);

if("IntersectionObserver" in window) {
    imagesToLoad.forEach(img => {
        observer.observe(img);
        });
}else {
    imagesToLoad.forEach(img => {loadImage(img)});
}
