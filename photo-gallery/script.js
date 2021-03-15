let url = "http://placekitten.com/300/300?image=";
//let kittenID = 0;
const container = document.querySelector(".container");
const chosenOnes = document.querySelector(".chosen-kittens");
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

kittens.forEach(kitten => {
    kitten.addEventListener('click', () => {
        kitten.classList.toggle("selected");
        chosenOnes.style.display = "block";
        kittenArray.push(kitten.classList[1]);
    });
});

addKittens.addEventListener('click', () => selectKittens(kittenArray));


function selectKittens(arr) {
    arr.forEach(kitten => {
        //add to favorite kitten section
        console.log(kitten)
        //remove from other kitten section
    });
}
