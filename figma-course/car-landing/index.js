const menuBtn = document.querySelector('.menu');
const filter = document.querySelector('.filter');

menuBtn.addEventListener('click', () => filter.classList.toggle('hide'));

function changeHeart(icon) {
    console.log(icon)

    icon.style.color = "#000";
}