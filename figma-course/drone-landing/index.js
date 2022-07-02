const hamburgerBtn = document.querySelector('.hamburger');
const navClose = document.querySelector('.menu-close');
const nav = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', showNav);
navClose.addEventListener('click', hideNav);

function showNav() {    
    nav.style.transform = "translateX(0)";
}

function hideNav() {
    nav.style.transform = "translateX(100%)";
}