const hamburger = document.getElementById('hamburger');
const arrow = document.getElementById('arrow');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(0)';
})

arrow.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(-1000%)';
})