document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1 get bank account
    const bankAccount = getValueFormInput("add-money-bank");
    if (bankAccount == "Select a Bank") {
        alert("Please Select a Bank");
        return;
    }
    // 1 get account number
    const addNumber = getValueFormInput("add-money-number");
    if (addNumber.length != 11) {
        alert("Invalid Account Number");
        return;
    }
    // 1 get add money
    const addMoney = getValueFormInput("add-money-amount");
    const newBalance = getBalance() + Number(addMoney);
    const pin = getValueFormInput("add-money-pin");
    if (Number(pin) === 1234) {
        alert(`Add Money Success form ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
        // 1 - history-container ke dore niya asbho
        const history = document.getElementById("history-container");
        //2 - new div creat korbo
        const newHistory = document.createElement("div");
        //3 - new div er inner Html add korbo
        newHistory.innerHTML = `<div class="transaction-card p-5 bg-base-100">
         Add Money Success form
         ${bankAccount}, at Account No - ${addNumber}, Deposit ${addMoney}Tk   ${new Date()}
         </div>`;
        //4 - history-container e newDiv append korbo
        history.append(newHistory);
    } else {
        alert("Invalid Pin");
        return;
    }
});
