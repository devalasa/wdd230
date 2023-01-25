// Long hand method ... building day and month names from built-in date methods.
let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Fridat",
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
let fulldate = `© ${year} | Richard O. Ogboanoh | Last Updated: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;
document.querySelector(".date").textContent = fulldate;