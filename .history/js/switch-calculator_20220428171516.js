const num1 = document.getElementById("input1").value;
const num2 = document.getElementById("input2").value;
const operator = document.getElementById("input3").value;
const finalfinalOutput = document.getElementById("finalOutput");
console.log(finalfinalOutput);
console.log(finalfinalOutput.value);
let answer; 

function sum() {
switch(operator) {
        case "+" :
        answer = +num1 + +num2;
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