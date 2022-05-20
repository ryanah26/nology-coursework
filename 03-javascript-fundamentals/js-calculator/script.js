
let primaryNumber = "";
let operator = "";
let secondaryNumber = "";
let storedNumber = 0;
let equals = 0;

const acButton = document.querySelectorAll('.js-acBtn');
const functionButton = document.querySelectorAll('.js-funcBtn');
const numberButton = document.querySelectorAll('.js-numBtn');
const decimalButton = document.querySelectorAll('.js-deciBtn');
const equalsButton = document.querySelectorAll('.js-equalsBtn');
const calculatorDisplay = document.querySelectorAll('.js-result');

const updateDisplay = (number) => calculatorDisplay.innerHTML = number;

numberButton.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        (!primaryNumber) ? primaryNumber = event.target.innerHTML : primaryNumber += event.target.innerHTML;
    })
})


functionButton.forEach(funcBtn => {
    funcBtn.addEventListener('click', (event) => {
        operator = event.target.value;
        if (primaryNumber) {
            storedNumber = parseFloat(primaryNumber);
            primaryNumber = "";
        }
    })
})

decimalButton.addEventListener('click', () => {
    if (!primaryNumber.includes('.')) {
        primaryNumber += ('.');
        updateDisplay(primaryNumber);
    }
})

equalsButton.addEventListener('click', () => {
    if (!primaryNumber) secondaryNumber === "" ? primaryNumber = storedNumber : primaryNumber = secondaryNumber;

    switch(operator) {
        case "divide" :
            equals = storedNumber + parseFloat(primaryNumber);
            break;
        case "multiply" :
            equals = storeNumber + parseFloat(primaryNumber);
            break;
        case "minus" :
            equals = storedNumber + parseFloat(primaryNumber);
            break;
        case "plus" :
            equals = storedNumber + parseFloat(primaryNumber);
        default:
            "Invalid function"
            break;
    }
    updateDisplay(equals);

    storedNumber = equals;
    secondaryNumber = primaryNumber;
    primaryNumber = "";
})

acButton.addEventListener('click', () => {
    const resetDisplay = () => {
        updateDisplay(0);
        equals = 0;
        primaryNumber = "";
        secondaryNumber = "";
        storedNumber = 0;
    }
    resetDisplay(0);
})


