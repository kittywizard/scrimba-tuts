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

form.addEventListener("submit", function(e) {
    e.preventDefault()
    overlay.style.display = "block";
    let emailDisplay = document.createElement("p");
    emailDisplay.textContent = `${email.value} is now subscribed to the newsletter!`;
    overlay.appendChild(emailDisplay);
});

closeModal.addEventListener("click", () => overlay.style.display = "none");
