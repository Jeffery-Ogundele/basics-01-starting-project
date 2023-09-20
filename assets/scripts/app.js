const defaultResult = 0;
let currentResult = defaultResult;

function add (num1, num2) {
    const result = num1 + num2;
    alert(`the result is ${result}`)
}
add (1,3)
add (0,4)

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDecription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDecription);
