const hamburgerBtn = document.querySelector('.hamburger');
const navClose = document.querySelector('.menu-close');
const nav = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', showNav);
navClose.addEventListener('click', hideNav);

function showNav() {    
    nav.style.display = "block";
    hamburgerBtn.style.display = 'none';
}

function hideNav() {
    nav.style.display = 'none';
    hamburgerBtn.style.display = 'block';

}