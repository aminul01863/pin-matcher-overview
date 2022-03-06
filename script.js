function pinMatcher() {
    const getPin = Math.round(Math.random() * 10000)
    const pinString = getPin + '';
    if (pinString.length == 4) {
        return getPin
    } else {

        return pinMatcher()
    }
}

function getFullNumber() {
    const pin = pinMatcher()
    document.getElementById('pin-match').value = pin;
}
document.getElementById('pin-number').addEventListener('click', function(e) {
    const pinInput = document.getElementById('genaret-number')
    const pinNumber = e.target.innerText;
    if (isNaN(pinNumber)) {
        if (pinNumber == 'C') {
            pinInput.value = ''
        }
    } else {

        const setInput = pinInput.value
        const totalInput = setInput + pinNumber
        pinInput.value = totalInput
    }
})
document.getElementById('submit-btn').addEventListener('click', function() {
    const pintInput = document.getElementById('pin-match').value;
    const numberInput = document.getElementById('genaret-number').value
    if (pintInput == numberInput) {
        document.getElementById('pin-success').style.display = "block"
        document.getElementById('pin-rong').style.display = "none"
    } else {
        document.getElementById('pin-rong').style.display = "block"
        document.getElementById('pin-success').style.display = "none"
    }

})