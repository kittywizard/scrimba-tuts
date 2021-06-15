const btn = document.getElementById('submitBtn');
btn.addEventListener('click', (e) => {
    getData();
    e.preventDefault();
});

const form = document.getElementById('tipCalc');

function getData() {
    console.log("test")
    
}

//need to activate the function with any button click - but need to make sure that the check amount has been filled in 