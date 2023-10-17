const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
 

function getUserInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBefotrCalc, calcNumber) {
  const calcDescription = `${resultBefotrCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult 
  };
  logEntries.push(logEntry);

  console.log(logEntries);
}

function calculationResult(calcType) {
   const enteredNumber = getUserInput();
     
    
  if (
    calcType !== "ADD" && 
  calcType !== "SUBTRACT" &&
  calcType !== 'MULTIPLY' && 
  calcType !== "DIVIDE" ||
  !enteredNumber) {
    return;
  }
  //Both conditions would work
 
  // if (
  //   calcType === 'ADD'||
  //   calcType === 'SUBTRACT' ||
  //   calcType === 'MULTIPLY' ||
  //   calcType === 'DIVIDE'  

  // ){
 
    const initialResult = currentResult;
    let mathOperator;
   
    if (calcType === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
    } else if (calcType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOperator = "-";
    } else if (calcType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = "*";
    } else if (calcType === "DIVIDE") 
    {
      currentResult /= enteredNumber;
      mathOperator = "/";
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);  
  }
   
   

 
 

function add() {
  calculationResult("ADD");
}

function subtract() {
  calculationResult("SUBTRACT");
}

function multiply() {
  calculationResult("MULTIPLY");
}

function divide() {
  calculationResult("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//all the buttons work :)
//the return keyword
//
