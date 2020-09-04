const previous = document.getElementById('button-previous');
const next = document.getElementById('button-next');

previous.addEventListener('click', moveToPrevSlide);
next.addEventListener('click', moveToNextSlide);

const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;
const totalSlides = slides.length;

function moveToNextSlide() {
    
    hideSlides();

    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    //add visible class to next slide
    slides[slidePosition].classList.add('visible');
}

function moveToPrevSlide() {
    hideSlides();

    if(slidePosition === 0) {
       
        slidePosition = totalSlides - 1;
        console.log(slidePosition);

    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add('visible');
}

function hideSlides() {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }
}