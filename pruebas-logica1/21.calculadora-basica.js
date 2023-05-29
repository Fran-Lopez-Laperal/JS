/* 
*** CALCULADORA BASICA ***
Recibiendo un número, un operador ('+', '-', '*', '/'), y otro número, resuelva la cuenta ingresada.
*/

function basicCalculator(firstNumber, operator, secondNumber) {
    let operation = operator.trim(" ")



    switch (operation) {
        case '+':
            result = firstNumber + secondNumber
            break;

        case '-':
            result = firstNumber - secondNumber
            break;
        case '*':
            result = firstNumber * secondNumber
            break;
        case '/':
            result = firstNumber / secondNumber
            break;
        default:
            break;
    }

    return result
}

console.log(basicCalculator(12, "*", 5));