function add(a, b) {
    return a + b;
};

function subtract (a, b){
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b){
    return a / b;
};


function operate (firstNum, operator, secondNum){
    if (operator == '+') return add(firstNum, secondNum);
    if (operator == '-') return subtract(firstNum, secondNum);
    if (operator == '*') return multiply(firstNum, secondNum);
    if (operator == '/') return divide(firstNum, secondNum);
};

let firstNumber = null;
let secondNumber = null;
let sign = null;

let display = document.querySelector('#display')
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => clearIt());

function clearIt(){
    display.textContent = null;
}


let numbers = document.querySelectorAll('.numbers');
let signs = document.querySelectorAll('.sign');

function displayIt(){
    let strArr = [];    
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', () =>{
            display.innerHTML += numbers[i].value;
            strArr.push(numbers[i].value);
        });
    };

    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', () =>{
            clearIt();
            storeNum(strArr);
            strArr = [];

            sign = signs[i].value;
            
            getNum();
            console.log(firstNumber);
            console.log(secondNumber);
        })
    }
};
displayIt();

let numberArr = [];//store numbers that are typed at index 0 and will be changed every time a sign button is clicked

function storeNum (arr){
    let digit = '';
    for(let i = 0; i < arr.length; i++){
        digit += arr[i];
    }
    numberArr[0] = parseInt(digit);
}

//coverts numberArr[0] numbers into input values for calculation
function getNum() {
    if(firstNumber == null && result == null){
        firstNumber = numberArr[0];
    } else if(firstNumber == null && result != null){
        firstNumber = result;
    } else{
        secondNumber = numberArr[0];
    }
}

let result = null;