const btnEl = document.getElementById("calculate");
const billinput = document.getElementById("bill");
const tipinput = document.getElementById("tip");
const totalSpan = document.getElementById("total");


function calculateTotal(){
    const billValue = billinput.value;
    const tipValue = tipinput.value;
    const totalValue = billValue*(1+tipValue / 100);
    totalSpan.innerText = "$"+totalValue.toFixed(2);
}

btnEl.addEventListener("click",calculateTotal);