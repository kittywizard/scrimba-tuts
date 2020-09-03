const previous = document.getElementById('button-previous');
const next = document.getElementById('button-next');

previous.addEventListener('click', moveToPrevSlide);
next.addEventListener('click', moveToNextSlide);

const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;
const totalSlides = slides.length;

function moveToNextSlide() {
    console.log("next");
    //when clicked
}

function moveToPrevSlide() {
    console.log("prev");
}