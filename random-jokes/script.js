//variables

const setupDiv = document.querySelector('.jokeDisplay');
const punchlineDiv = document.querySelector('.punchlineDisplay');
const punchlineBtn = document.getElementById('getPunchline');
const newJokeBtn = document.getElementById('getNewJoke');

newJokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    punchlineDiv.innerText = '';

    const promise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const jokes = await promise.json();

    let setup = jokes[0].setup;
    let punchline = jokes[0].punchline;

    setupDiv.innerText = setup;

    punchlineBtn.addEventListener('click', () => {
        punchlineDiv.innerText = punchline;
        punchlineBtn.classList.toggle('hidden'); //fix the button logic
        });
}

getJoke();

