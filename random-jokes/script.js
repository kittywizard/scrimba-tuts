//variables

const setupDiv = document.querySelector('.jokeDisplay');
const punchlineDiv = document.querySelector('.punchlineDisplay');
const punchlineBtn = document.getElementById('getPunchline');
const newJokeBtn = document.getElementById('getNewJoke');

newJokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    const promise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const jokes = await promise.json();

    console.log(jokes);

    
}
