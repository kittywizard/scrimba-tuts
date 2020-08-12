

//open modal
const openModal = document.getElementById('open-modal');
openModal.addEventListener('click', function() {
    overlay.style.display = "block";
});

//close modal
const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function(){
    overlay.style.display = "none";
})