document.getElementById("cahout-btn").addEventListener("click", function () {
    //1 - get agent number &valid
    const cashoutNumber = getValueFormInput("cashout-number");
    if (cashoutNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }
    //2 - get the amount
    const cashoutAmount = getValueFormInput("amount");
    //3 - get current balance
    const currentBalance = getBalance();
    console.log(currentBalance);
    //console.log(oldBalance);
    //4 - calculate new balance
    const newBalance = Number(currentBalance) - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFormInput("cahout-pin");
    if (Number(pin) !== 1234) {
        alert("Invalid Pin");
        return;
    } else {
        alert("Cashout Successfull");
        setBalance(newBalance);

        // 1 - history-container ke dore niya asbho
        const history = document.getElementById("history-container");
        //2 - new div creat korbo
        const newHistory = document.createElement("div");
        //3 - new div er inner Html add korbo
        newHistory.innerHTML = `<div class="transaction-card p-5 bg-base-100">
         Cashout Success form
         ${cashoutNumber},  Withdrow ${cashoutAmount}Tk   ${new Date()}
         </div>`;
        //4 - history-container e newDiv append korbo
        history.append(newHistory);
    }
});

// document.getElementById("cahout-btn").addEventListener("click", function () {
//     //1 - get agent number &valid
//     const cashOutNumberInput = document.getElementById("cashout-number");
//     const cashOutNumberValue = cashOutNumberInput.value;
//     if (cashOutNumberValue.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }
//     //console.log(cashOutValue);
//     //2 - get the amount
//     const amount = document.getElementById("amount");
//     const amountValue = amount.value;

//     //console.log(amountValue);
//     //3 - get current balance ,validate, convert number
//     const balanceElement = document.getElementById("balance");
//     const oldBalance = balanceElement.innerText;
//     //console.log(oldBalance);
//     //4 - calculate new balance
//     const newBalance = Number(oldBalance) - Number(amountValue);

//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }
//     //5 - get the pin varify
//     const pinNumber = document.getElementById("cahout-pin");
//     const pinValue = pinNumber.value;
//     if (pinValue === "1234") {
//         //5 -1 true show an alert > set balance
//         console.log("cashout successfull");
//         console.log("newBalance", newBalance);
//         balanceElement.innerText = newBalance;
//     } else {
//         //5 -2 flase show anerror alert > return
//         alert("Invalid pin");
//         return;
//     }
// });

// document.getElementById("cahout-btn").addEventListener("click", function () {
//     const cashoutNumber = document.getElementById("cashout-number");
//     const cashoutNumberValue = cashoutNumber.value;
//     if (cashoutNumberValue.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     } else {
//         const amount = document.getElementById("amount");
//         const amountValue = amount.value;
//         const balanceElement = document.getElementById("balance");
//         const balanceElementValue = balanceElement.innerText;
//         const newBalance = Number(balanceElementValue) - Number(amountValue);
//         if (newBalance < 0) {
//             alert("Invalid Amount");
//             return;
//         }
//         const pin = document.getElementById("cahout-pin");
//         const pinValue = pin.value;
//         if (pinValue == 1234) {
//             alert("cashout successfull");
//             console.log("New Balance", newBalance);
//             balanceElement.innerText = newBalance;
//         } else {
//             alert("Invalid pin");
//             return;
//         }
//     }
// });
