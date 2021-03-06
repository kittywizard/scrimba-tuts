/*
DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇

const button1 = document.getElementById("button-one");
const button2 = document.getElementById("button-two");
const button3 = document.getElementById("button-three");

const logo = document.querySelector(".logo");
const text = document.getElementById("text");

button1.addEventListener("click", () => {text.style.color = "black"});
button2.addEventListener("click", () => {logo.style.background = "red"});
button3.addEventListener("click", () => {logo.style.boxShadow = "5px 5px 5px #ccc"});

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use eventlisteners on the buttons to envoke functions
3. change the properties of the logo using JavaScript

STRETCH GOALS:
- If any of the buttons are clicked a second time, I want the change they 
  are responsible for to be reversed.
- Can you improve the overall design?

*/
