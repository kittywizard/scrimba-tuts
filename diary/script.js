const entryForm = document.getElementById('entryForm');
const entrySection = document.getElementById('entries');
const text = document.getElementsByClassName('entry-textbox');


entryForm.addEventListener('submit', addEntry);

function addEntry(e){
    e.preventDefault();
    console.log(text);

}