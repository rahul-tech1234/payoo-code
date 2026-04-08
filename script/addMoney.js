(document.getElementById("add-money-btn").
    addEventListener("click", function () {
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
        const newBalance =getBalance() + Number(addMoney);
        const pin = getValueFormInput("add-money-pin");
        if (Number(pin) === 1234) {
            alert(`Add Money Success form ${bankAccount} at ${new Date()}`)
            newBalance = setBalance(newBalance);
            
        }else{
            alert('Invalid Pin');
            return
        }
        
    }));
