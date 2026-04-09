document.getElementById("transfer-btn").addEventListener('click', function() {
    // 1 - get User Account Number input
    const userAccount = getValueFormInput("user-account");
    if (userAccount.length != 11) {
        alert("Invalid User Account Number");
        return;
    }
    const transferMoney = getValueFormInput('transfer-amount');
    const currentBalance =getBalance('balance');
    const newBalance =currentBalance - transferMoney;
    if (newBalance < 0) {
        alert('Invalid Balance');
        return; 
    }
    const transferPin = getValueFormInput("transfer-pin");
    if (Number (transferPin) === 1234) {
        alert('Transfer Successfull');
        setBalance(newBalance);
        return;
    }
});