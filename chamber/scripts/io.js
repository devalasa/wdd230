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