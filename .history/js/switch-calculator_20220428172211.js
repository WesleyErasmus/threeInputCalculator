const num1elementbox = document.getElementById("input1");
console.log(num1elementbox)
const num2elementbox = document.getElementById("input2");
const operator = document.getElementById("input3").value;
const finalOutput = document.getElementById("output");
console.log(finalOutput);
console.log(finalOutput.value);
let answer; 

function sum() {
switch(operator) {
        case "+" :
        answer = num1 + num2;
        finalOutput.innerHTML = answer;
        break;
        case "-" :
        answer = num1 - num2;
        finalOutput.innerHTML = answer;
        break;
        case "*" :
        answer = num1 * num2;
        finalOutput.innerHTML = answer;
        break;
        case "/" :
        answer = num1 / num2;
        finalOutput.innerHTML = answer;
        break;
        default :
        finalOutput.innerHTML = answer;
        console.log(answer);
        break;
    }
}