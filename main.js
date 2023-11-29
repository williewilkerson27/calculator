// Global Variables
let currentNumber = '';
let previousNumber = '';
let operator = '';

                                                                                                                        
// DOM Elements we will modify
const currentDisplayNumber = document.querySelector('.currentNum');
const previousDisplayNumber = document.querySelector('.previousNum')

const equal = document.querySelector('.equal');
equal.addEventListener( 'click', calculate )

const decimal = document.querySelector('.decimal');

const clear = document.querySelector('.clear');

const numberButtons = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');


// this is to listen for everytime a number btn is pressed 
numberButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    } )
})
// handleNumber will take the number the user inputs and display it.
function handleNumber(number) {
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
    operator = op;
    previousNumber = currentNumber;
    previousDisplayNumber.textContent = previousNumber + operator;
    currentNumber = '';
    currentDisplayNumber.textContent = '';
}

function calculate() {
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
            previousNumber = "Error"
            previousDisplayNumber.textContent = '';
            currentDisplayNumber.textContent = previousNumber;
            operator = ''
            return;
        }
        previousNumber /= currentNumber
    }
    previousNumber = previousNumber.toString()
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent =  previousNumber;
    operator = '';
}
    


