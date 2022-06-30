const menuBtn = document.querySelector('.menu');
const filter = document.querySelector('.filter');
const filterStyles = window.getComputedStyle(filter);
const hearts = document.querySelectorAll('.far');

menuBtn.addEventListener('click', () => {
    if(filterStyles.getPropertyValue('clip-path') === "circle(0% at 100% 0%)") {
        filter.style.clipPath = "circle(100% at 50% 50%)";
    } else {
        filter.style.clipPath = "circle(0% at 100% 0%)";
    }
});

document.addEventListener('mouseup', (event) => {
    if(filterStyles.getPropertyValue('clip-path') === "circle(100% at 50% 50%)") {
        if(!filter.contains(event.target)) {
            filter.style.clipPath = "circle(0% at 100% 0%)"
        }
    }
});

function changeHeart(icon) {
    icon.classList.toggle("fas");
    icon.classList.toggle('far');
}