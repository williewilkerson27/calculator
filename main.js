// Global Variables
let currentNumber = '';
let previousNumber = '';
let operator = '';

                                                                                                                        
// DOM Elements we will modify
const currentDisplayNumber = document.querySelector('.currentNum');
const previousDisplayNumber = document.querySelector('.previousNum')

window.addEventListener( 'keydown', handleKeyPress )

// this makes sure that currentNumber and previousNumber are not empty. and if they arent empty, it will calculate as expected
const equal = document.querySelector('.equal');
equal.addEventListener( 'click', () => {
    if ( currentNumber != "" && previousNumber != "" ) {
        compute()
    }
} )

const decimal = document.querySelector('.decimal');
decimal.addEventListener( 'click', () => {
    addDecimal();
})

// were adding a eventlistener so we dont have to keep refreshing
const clear = document.querySelector('.clear');
clear.addEventListener( 'click', clearCalculator )

const numberButtons = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');


// this is to listen for everytime a number btn is pressed 
numberButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    })
});

// handleNumber will take the number the user inputs and display it.
function handleNumber(number) {
    if ( previousNumber !== '' && currentNumber !== '' && operator === '' ) {
        previousNumber = '';
        currentDisplayNumber.textContent = currentNumber;
    }

    if ( currentNumber.length <= 11 ) {
    currentNumber += number;
    currentDisplayNumber.textContent = currentNumber;
    }
}

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    })
});

function handleOperator(op) {
    if (previousNumber === '') {
        previousNumber = currentNumber;
        operatorCheck(op)
    } else if ( currentNumber === '' ) {
        operatorCheck(op)
    } else {
        compute();
        operator = op;
        currentDisplayNumber.textContent = '0';
        previousDisplayNumber.textContent = previousNumber + ' ' + operator
    }
}

function operatorCheck(text) {
    operator = text;
    previousDisplayNumber.textContent = previousNumber + ' ' + operator;
    currentDisplayNumber.textContent = '0';
    currentNumber = '';
}

function compute() {
    // we are converting our previous numbers into Numbers.
    previousNumber = Number(previousNumber)
    currentNumber = Number(currentNumber)

    if ( operator === '+' ) {
        previousNumber += currentNumber;
    } else if ( operator === '-' ) {
        previousNumber -= currentNumber;
    } else if ( operator === 'x' ) {
        previousNumber *= currentNumber;
    } else if ( operator === '/' ) {
        // so you cant divide by zero 
        if ( currentNumber <= 0 ){
            previousNumber = "Error";
            displayResults();
            return;
        }
        previousNumber /= currentNumber;
                
    }
    previousNumber = roundNumber(previousNumber)
    previousNumber = previousNumber.toString();
    displayResults();
}

// this rounds the answer to the closest digit
function roundNumber(num) {
    return Math.round(num * 100000) / 100000
}

// this makes sure there arent more than 11 characters in calculator
// the slice method is being used to slice up to 11 characters and add ... to the end.
function displayResults() {
    if ( previousNumber.length <= 11 ) {
        currentDisplayNumber.textContent = previousNumber;
    } else {
        currentDisplayNumber.textContent = previousNumber.slice(0, 11) + "...";
    }
    previousDisplayNumber.textContent = '';
    operator = '';
    currentNumber = '';
}

function clearCalculator() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = "";
}
    
function addDecimal() {
    if ( !currentNumber.includes('.')) {
        currentNumber += '.';
        currentDisplayNumber.textContent = currentNumber;
    }
}

// this makes it where you can type commands from your keyboard
function handleKeyPress(e) {
    e.preventDefault();
    if ( e.key >= 0 && e.key <= 9 ) {
        handleNumber(e.key)
    }
    if ( e.key === 'Enter' || (e.key === '=' && currentNumber != '' && previousNumber != '' )) {
        compute()
    }
    if ( e.key === '+' || e.key === '-' || e.key === '/' ) {
        handleOperator(e.key)
    }
    if ( e.key === '*' ) {
        handleOperator(e.key)
    }
    if ( e.key === '.' ) {
        addDecimal()
    }
}

