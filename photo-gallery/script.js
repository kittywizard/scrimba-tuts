let url = "http://placekitten.com/300/300?image=";
//let kittenID = 0;
const container = document.querySelector(".container");
const chosenOnes = document.querySelector(".chosen-kittens");
const newKittens = document.querySelector(".new-kittens");
chosenOnes.style.display = "none";

const addKittens = document.getElementById("addKittens");

const kittenMax = 16;
let kittenArray = [];


//let randomKitten = () => Math.floor( Math.random() * kittenMax);
//kittenID = randomKitten();

function displayKittens() {
    for(let kittenID = 0; kittenID < kittenMax; kittenID++) {
        let img = document.createElement("img");
        img.classList.add("kitten", kittenID);
        img.src = url + kittenID;

        container.appendChild(img);
    }

}

displayKittens();
let kittens = document.querySelectorAll(".kitten");

//need to have a check if a kitten gets unselected before adding

kittens.forEach(kitten => {
    kitten.addEventListener('click', () => {
        kitten.classList.toggle("selected");
        chosenOnes.style.display = "block";
        kittenArray.push(kitten.classList[1]);
    });
});

addKittens.addEventListener('click', () => selectKittens(kittenArray));


function selectKittens(arr) {
    console.log(arr);
    arr.forEach(kitten => {

        let img = document.createElement("img");
        img.classList.add("kitten");
        img.src = url + kitten;
        newKittens.appendChild(img);
        
        const removeKittens = document.querySelectorAll(".selected");
        removeKittens.forEach(kitten => kitten.style.display = "none");
    });
}
