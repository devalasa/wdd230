let date = document.querySelector(".date")
let currentTime = new Date();
currentTime.setMinutes(currentTime.getMinutes() + 30);
currentTime.setSeconds(currentTime.getSeconds() + 15);
date.textContent = `Last updated: ${currentTime}`;