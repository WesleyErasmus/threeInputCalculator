// Inside each script your need to ask the user for 3 inputs and save them to variables

// input1, input2, input3
// const num1 = document.getElementById(input1).value;
// const num2 = document.getElementById(input2).value;
// const operator = document.getElementById(input3).value; 

// function calculateInputs() {
//     answer = (num1(operator)num2)

// }

const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);