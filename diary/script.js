const entryForm = document.getElementById('entryForm');
const entrySection = document.getElementById('entries');
const text = document.getElementsByClassName('entry-textbox'); //this returns a collection which is basically an array
const entriesNav = document.querySelector('.entries-nav');
let buttonCount = 1; 


function addEntry(e){

    let entryDiv = document.createElement('div');
    entryDiv.className = "single-entry";
    entryDiv.innerText = text[0].value;
    entryDiv.style.display = "none";
    entrySection.style.display = "block";
    entrySection.appendChild(entryDiv);

    //clear text box
    text[0].value = '';

    const displayButton = document.createElement("button");
    displayButton.className = "entry-button";
    displayButton.innerText = buttonCount;
    entriesNav.appendChild(displayButton);

    buttonCount++;
    console.log(buttonCount);
    e.preventDefault();
}

entryForm.addEventListener('submit', addEntry);
