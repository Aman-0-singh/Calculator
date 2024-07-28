const operationsDisplay = document.querySelector(".operations");
const resultDisplay = document.querySelector(".result");
let resultContent = "";
let operationContent = "";
let num1;
let num2;
let operation;
let isFloat1 = false;
let isFloat2 = false;

let operate;
const operateButton = document.querySelector(".operate");
operateButton.addEventListener("click", () => {
    operate = new Function('return ' + operation)();
    operate();    
});

const add = () => {
    num2 = resultContent;
    operationContent = "";
    operationsDisplay.textContent = "";
    if (!isFloat1 & !isFloat2) {
        resultContent = parseInt(num1) + parseInt(num2);
        resultDisplay.textContent = resultContent;
    } else {
        resultContent = parseFloat(num1) + parseFloat(num2);
        resultDisplay.textContent = resultContent;
    }
}

const subtract = () => {
    num2 = resultContent;
    operationContent = "";
    operationsDisplay.textContent = "";
    resultContent = num1 - num2;
    resultDisplay.textContent = resultContent;
}

const multiply = () => {
    num2 = resultContent;
    operationContent = "";
    operationsDisplay.textContent = "";
    resultContent = num1 * num2;
    resultDisplay.textContent = resultContent;
}

const divide = () => {
    num2 = resultContent;
    operationContent = "";
    operationsDisplay.textContent = "";
    resultContent = num1 / num2;
    resultDisplay.textContent = resultContent;
}

const mod = () => {
    num2 = resultContent;
    operationContent = "";
    operationsDisplay.textContent = "";
    resultContent = num1 % num2;
    resultDisplay.textContent = resultContent;
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (resultDisplay.textContent === "0"){
            resultContent = "";
        }
        if (resultDisplay.textContent.length <= 12){
            resultContent += e.target.value;
            resultDisplay.textContent = resultContent;
        }
    });
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (resultContent != "") {
            if (operationContent == ""){
                operation = e.target.value;
                num1 = resultContent;
                operationContent = e.target.textContent + " " +resultContent;
                operationsDisplay.textContent = operationContent;
                resultContent = "";
                resultDisplay.textContent = resultContent;
            }else {
                operate = new Function('return ' + operation)();
                operate();
                operation = e.target.value;
                num1 = resultContent;
                operationContent = e.target.textContent + " " +resultContent;
                operationsDisplay.textContent = operationContent;
                resultContent = "";
                resultDisplay.textContent = resultContent;
            }            
        }        
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    operationContent = "";
    operationsDisplay.textContent = operationContent;
    resultContent = "";
    resultDisplay.textContent = "0";
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    if (resultContent != "") {
        let tempResultContent = resultContent.slice(0, resultContent.length - 1);
        if (tempResultContent.length == 0){
            tempResultContent = "0";
        }
        resultContent = tempResultContent;
        resultDisplay.textContent = resultContent;
    }
    
});

const floatButton = document.querySelector(".float");
floatButton.addEventListener("click", (e) => {
    if (isFloat1 == false & operationContent == ""){
        isFloat1 = true;
        resultContent += e.target.value;
        resultDisplay.textContent = resultContent;
    }
    if (isFloat2 == false & operationContent != "") {
        isFloat2 = true;
        resultContent += e.target.value;
        resultDisplay.textContent = resultContent;
    }
});