
const form = document.getElementById('tipCalc');
const results = document.querySelector('.results');
// const tip15 = document.getElementById('15percent');
// const tip18 = document.getElementById('18percent');
// const tip20 = document.getElementById('20percent');

// tip15.addEventListener('click', () => {
//     setTipAmount(15, tip15);
// });

// tip18.addEventListener('click', () => {
//     setTipAmount(18, tip18);
// });

// tip20.addEventListener('click', () => {
//     setTipAmount(20, tip20);
// });

form.addEventListener('submit', e => {
    let newData = new FormData(e.target);
    let check = newData.get('checkAmount');

    //need to check for if a button was clicked or a custom tip amount
    let tip = newData.get('tipAmount');
    
    //check to see which tip id has the class of selected, if none do, then grab the custom amount
    //if no custom amount, throw an error

    getData(check, tip);
    e.preventDefault();
});


function getData(check, tip) {

    //need to tell JS that check is a number??
    let tipPercent = tip / 100; //to get the decimal

    let tipFinal = (Number(check) * tipPercent).toFixed(2);
    tipFinal = Number(tipFinal);
    console.log(`Amount of Tip: $${tipFinal}`);

    let totalBill = Number(check) + tipFinal;
    totalBill = Number(totalBill).toFixed(2);
    console.log(`Total Bill Amount: ${totalBill}`);
    console.log(typeof check);


    // let checkDisplay = document.createElement('span');
    // checkDisplay.classList.add('result-display');
    // checkDisplay.textContent = `Check: ${check}`;

    // let tipDisplay = document.createElement('span');
    // tipDisplay.classList.add('result-display');
    // tipDisplay.textContent = `Tip Amount: ${tipFinal}`;


    // let totalDisplay = document.createElement('span');
    // totalDisplay.classList.add('result-display');
    // totalDisplay.textContent = `Total: ${totalBill}`;

    // results.appendChild(checkDisplay);
    // results.appendChild(tipDisplay);
    // results.appendChild(totalDisplay);
    results.classList.toggle('hide');
    results.innerHTML = `
                        <strong>Check Amount:</strong> ${check}
                        <br>
                        <strong>Tip Amount:</strong> ${tipFinal}
                        <hr>
                        <strong>Total:</strong> ${totalBill}        `;
}

function setTipAmount(tip, btn) {
    btn.classList.add('selected');
    //deselect other buttons - remove eventlisteners
    btn.removeEventListener('click', () => {
        setTipAmount(tip, btn);
    });
    console.log(tip);
}

//need to activate the function with any button click - but need to make sure that the check amount has been filled in 