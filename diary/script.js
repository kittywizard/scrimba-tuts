const entryForm = document.getElementById('entryForm');
const entrySection = document.getElementById('entries');
const text = document.getElementsByClassName('entry-textbox'); //this returns a collection which is basically an array

function addEntry(e){

    let entryDiv = document.createElement('div');
    entryDiv.className = "single-entry";
    entryDiv.innerText = text[0].value;
    console.log(entryDiv);

    entrySection.appendChild(entryDiv);
    e.preventDefault();
}

entryForm.addEventListener('submit', addEntry);
