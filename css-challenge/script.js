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
const closeModal = document.getElementById('closeModal');
const headline = document.querySelector(".appendMe");
let emailDisplay;

form.addEventListener("submit", function(e) {
    e.preventDefault()
    overlay.style.display = "block";
    emailDisplay = document.createElement("p");
    emailDisplay.textContent = `${email.value} is now subscribed to the newsletter!`;
    emailDisplay.classList.add("submitText", "desc");
    headline.appendChild(emailDisplay);
    form.reset();
});

closeModal.addEventListener("click", () => {
    
    overlay.style.display = "none";
    resetText(emailDisplay);
});

//refresh the page? 
//need to at least clear the code? 
function resetText(emailDisplay) {
    emailDisplay.textContent = '';
}