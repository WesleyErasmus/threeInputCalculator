// Inside each script your need to ask the user for 3 inputs and save them to variables

// input1, input2, input3
const num1 = document.getElementById(input1).value;
const num2 = document.getElementById(input2).value;
const operator = document.getElementById(input3).value; 

function calculateInputs() {
    let answer;
    if (operator == '+') {
        answer = num1 + num2;
    } else if {
        (operator == '-')
            answer = num1 - num2;
    } else if {
        (operator == '*')
            answer = num1 * num2;
    } else {

        result = num1 / num2;
    }

}

// const operator = prompt('Enter operator ( either +, -, * or / ): ');


// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;


// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }


// console.log(`${number1} ${operator} ${number2} = ${result}`);