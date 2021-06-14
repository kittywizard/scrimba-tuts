const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', changeMode);

const lighten = document.getElementById('lightenText');
const darken = document.getElementById('darkenText');

function changeMode() {
    toggleBtn.classList.toggle('toggled');
    lighten.classList.toggle('unselected');
    darken.classList.toggle('unselected');
}