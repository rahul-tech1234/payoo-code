function getValueFormInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
// matchine -> balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balanceValue = balanceElement.innerText;
    //console.log(balanceElement, balanceValue);
    console.log("Curren Balance", Number(balanceValue));
    return Number(balanceValue);
}

// matchine value -> set Balance

function setBalance(value) {
    const balanceElement =document.getElementById('balance');
    balanceElement.innerText =value;
}
