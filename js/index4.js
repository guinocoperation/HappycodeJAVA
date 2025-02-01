const slides = document.querySelector(".slides");
const slideWidth = document.querySelector(".slide").clientWidth;
let currentIndex = 0;

function moveToSlide(index) {
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}


document.getElementById("nextBtn").addEventListener("click", function (e) {
    if (currentIndex < slides.children.length - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0);
    }
});

document.getElementById("prevBtn").addEventListener("click", function (e) {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(slides.children.length - 1);
    }
});

setInterval(() => {
    if (currentIndex < slides.children.length - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0);
    }
}, 5000);
