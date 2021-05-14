const btn = document.querySelectorAll('.btn');
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        playSound(btn.id);
        });
});

function playSound(id) {
    //stop any audio that's playing before starting a new one??
    
    let audio = new Audio(`/sounds/${id}.mp3`);
    audio.play();
}

//other goals:
    //add new sounds
    //turn into a game? 
    