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

// initialize display elements
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls")); 

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}


numVisits++;
localStorage.setItem("visits-ls", numVisits);