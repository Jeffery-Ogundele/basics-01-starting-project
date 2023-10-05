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
    result: newResult,
  };
  logEntries.push(logEntry);

  console.log(logEntries);
}

function calculationResult(calcType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperaror;
  if (calcType === "ADD") {
    currentResult += enteredNumber;
    mathOperaror = "+";
  } else if (calcType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperaror = "-";
  } else if (calcType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperaror = "*";
  } else calcType === "DIVIDE";{
    currentResult /= enteredNumber;
    mathOperaror = "/";
  }

  createAndWriteOutput(mathOperaror, initialResult, enteredNumber);
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
