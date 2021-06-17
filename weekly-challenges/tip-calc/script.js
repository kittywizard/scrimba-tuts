
const form = document.getElementById('tipCalc');
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

    let tipFinal = check * tipPercent;
    console.log(`Amount of Tip: $${tipFinal}`);

    let totalBill = check + tipFinal;
    console.log(`Total Bill Amount: ${totalBill}`)
    
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