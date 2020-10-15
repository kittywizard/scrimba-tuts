/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input");
const form = document.getElementById("myForm");
const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("email: ", email.value);
    // need to display the modal 
    overlay.style.display = "block";
    modal.classList.toggle('hidden');

    //need to add background over everything else
});

//open modal
// form
// openModal.addEventListener('click', function() {
//     overlay.style.display = "block";
// });

//close modal
// const closeModal = document.getElementById('close-modal');
// closeModal.addEventListener('click', function(){
//     overlay.style.display = "none";
// });