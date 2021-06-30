
const form = document.getElementById('tipCalc');
const results = document.querySelector('.results');
const customDiv = document.querySelector(".custom");
const resetBtn = document.getElementById('resetBtn');

const customTip = document.getElementById('custom-tip');
customTip.addEventListener('click', () => {
    console.log('test');
    customDiv.classList.toggle('hide');
});

resetBtn.addEventListener('click', () => location.reload());

form.addEventListener('submit', e => {
    let newData = new FormData(e.target);
    let check = newData.get('checkAmount');
    let tip = newData.get('tipAmount');
    tip = Number(tip);

    if(tip === 0) {
        let newTip = newData.get('customTip');
        console.log(newTip);
        getData(check, newTip);
    } else {
        console.log(tip);
        getData(check, tip);
    }

    e.preventDefault();
});


function getData(check, tip) {

    let tipPercent = tip / 100; //to get the decimal

    let tipFinal = (Number(check) * tipPercent).toFixed(2);
    tipFinal = Number(tipFinal).toFixed(2);
    console.log(`Amount of Tip: $${tipFinal}`);

    let totalBill = Number(check) + Number(tipFinal);
    totalBill = Number(totalBill).toFixed(2);
    check = Number(check).toFixed(2);

    console.log(`Total Bill Amount: ${totalBill}`);

    results.classList.toggle('hide');
    resetBtn.classList.toggle('hide');
    results.innerHTML = `
                        <strong>Check Amount:</strong> $${check}
                        <br>
                        <strong>Tip Amount:</strong> $${tipFinal}
                        <hr>
                        <strong>Total:</strong> $${totalBill}`;

    //displayResults(check, tipFinal, totalBill);

}

function displayResults(check, tip, total) {
    let checkDisplay = document.createElement('div');
    let tipDisplay = document.createElement('div');
    let totalDisplay = document.createElement('div');

    checkDisplay.textContent = `Check Amount: ${check}`;
    tipDisplay.textContent = `Tip Amount: ${tip}`;
    totalDisplay.textContent = `Total: ${total}`;

    


}