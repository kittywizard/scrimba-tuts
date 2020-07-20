
let num = document.getElementById("num");
let button = document.getElementById("button");

document.addEventListener("click", eventTime);

function eventTime(){
    if(num.value === ""){
        console.log("Nothing was entered.");
    } else{
        console.log(num.value);
    }
}