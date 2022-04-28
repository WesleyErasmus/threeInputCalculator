

function sum() {
const num1 = document.getElementById("input1").value;
const num2 = document.getElementById("input2").value;
const operator = document.getElementById("input3").value;
const output = document.getElementById("output").value;
  let answer; 
  document.getElementById("output").value;
  if (operator == '+') {
    answer = num1 + num2;
  } else if (operator == '-') {
    answer = num1 - num2;
  } else if (operator == '*') {
    answer = num1 * num2;
  } else {
    answer = num1 / num2;
  }console.log(answer);
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
