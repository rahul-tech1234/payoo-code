document.getElementById('logInBtn')
.addEventListener('click', function() {
    //console.log('login');
    // 1- get the phone number input
    const inputNumber = document.getElementById("input-number");
    const contactNumber =inputNumber.value;
    //console.log(contactNumber);
    // 2- get the pin input
    const inputPin =document.getElementById('input-pin');
    const pin = inputPin.value;
    //console.log(pin);
    // 3- matvh pin & mobile number
    if (contactNumber == '01648718401' &&  pin == '1234') {
        // 3-1 true::: alert> home page
        alert('login Successfull');

        //window.location.replace("/pages/home.html");
        window.location.assign("/pages/home.html");
    }else{
        // 3-1 false::: alert> return
        console.log('login failed');
        return;
    }

})