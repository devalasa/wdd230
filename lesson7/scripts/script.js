const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImage = image => {
    const src = image.getAttribute("data-src");
    image.setAttribute("src", src);
    image.onload = () => {
        image.removeAttribute("data-src");
    }
};
const imgOptions = {
    
}

if("IntersectionObserver" in window) {
    console.log("Observer works")
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if(item.isIntersecting) {
                loadImage(item.target);
                observer.unobserve(item.target);
            }
        })
    }, imgOptions);
    imagesToLoad.forEach(img => observer.observe(img))
}else {
    imagesToLoad.forEach(img => {loadImage(img)});
}