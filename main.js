// Global Variables
let currentNumber = '';
let previousNumber = '';
let operator = '';

                                                                                                                        
// DOM Elements we will modify
const currentDisplayNumber = document.querySelector('.currentNum');
const previousDisplayNumber = document.querySelector('.previousNum')

const equal = document.querySelector('.equal');

const decimal = document.querySelector('.decimal');

const clear = document.querySelector('.clear');

const numberButtons = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');

numberButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    } )
})

// this will consolelog the number you hit
function handleNumber(number) {
    console.log(number)
}
