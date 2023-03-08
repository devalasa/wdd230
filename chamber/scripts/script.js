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
        this.closest(".banner").style.display = "none";
});