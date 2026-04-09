document.getElementById("pay-money-btn").addEventListener("click", function () {
    const paySelect = getValueFormInput("pay-select");
    if (paySelect === "Select To Pay") {
        alert("Please Select the Types");
        return;
    }
    const billAccountNumber = getValueFormInput("bill-account-number");
    if (billAccountNumber.length != 11) {
        alert("Enter Correct account Number");
        return;
    }
    const payAmount = getValueFormInput("amount-to-pay");
    const oldBalance = getBalance("balance");
    const newBalance = Number(oldBalance) - Number(payAmount);
    if (oldBalance < 0) {
        alert("Not Enough Balance");
        return;
    }
    const payMoneyPin = getValueFormInput("pay-money-pin");
    if (Number (payMoneyPin) === 1234) {
        alert("Payment Success");
        setBalance(newBalance);
    }else{
        alert('Invalid Pin');
        return;
    }
});
