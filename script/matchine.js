function getValueFormInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
// machine -> balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balanceValue = balanceElement.innerText;
    //console.log(balanceElement, balanceValue);
    console.log("Curren Balance", Number(balanceValue));
    return Number(balanceValue);
}

// machine value -> set Balance

function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}
//machine id -> hide all > show id
function showOnly(id) {
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");
    const moneyTransfer = document.getElementById("money-transfer");
    const payBill = document.getElementById("pay-bill");
    //console.log(`add Money- ${addMoney} , Cashout -${cashout}`);
    //all class element hide
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");
    moneyTransfer.classList.add("hidden");
    payBill.classList.add("hidden");
    //only shoe the id element
    const select = document.getElementById(id);
    select.classList.remove("hidden");
};
