var currentInput = "0";
var memory = "0";
var operator = 0;
var memvalue;
/**
* Helper function for displaying the current input
* @author Steve Temple
* @return {number} Returns the result
*/
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
/**
* Adds a digit to the current input
* @author Steve Temple
* @param {dig}  This is the original number
* @return {number} Returns the result
*/
function addDigit(dig) {
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    }
    else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}
/**
* Adds a decimal to the current input
* @author Steve Temple
* @return {number} Returns the result
*/
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
/**
* Clears everything.
* @author Steve Temple
* @return {number} Returns a clear screen/memory.
*/
function allClear() {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
* Stores the last operator pushed for multiply, divide, add, or subtract.
* @author Steve Temple
* @param {op}  This is the operator that has been choosen.
* @return {number} Returns a manipulated operator.
*/
function storeOperator(op) {
    if (op.indexOf("") > -1) {
        operator = 1;
    }; //codes for
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    if (op.indexOf("EE") > -1) {
        operator = 5;
    }; // exponent
    memory = currentInput; //store value
    currentInput = "0";
    displayCurrentInput();
}
/**
* Calculate using operator, the memory and what is current.
* @author Steve Temple
* @return {number} Returns a numerical value after utilizing an operator function from the storeOperator(op) function or a message displaying an error warning if user attempts to divide by zero
*/
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
        if (currentInput == "Infinity") {
            currentInput = "Error Divide By Zero";
        }
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    if (operator == 5 && currentInput >= 16) {
        currentInput = memory + "e" + currentInput;
    };
    if (operator == 5 && currentInput <= 15) {
        currentInput = currentInput = eval(memory) * eval(Math.pow(10, currentInput));
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Change the sign of the current input
/**
* This is a function for changing the sign of the current input
* @author Sinead Swayne
* @return {number} Returns the result
*/

function changeSign() {
    currentInput = (currentInput * -1)
    displayCurrentInput();
}
/**
* This is a function for clearing the current input back to 0.
* @author Sinead Swayne
* @return {number} Returns a clear input
*/
function clearCurrent() {
    currentInput = "0";
    displayCurrentInput();
}
/**
* Change the current input to a percentage.
* @author Sinead Swayne
* @return {number} Returns numerical value as a percentage.
*/
function percentage() {
    currentInput = (currentInput / 100);
    displayCurrentInput();
}
// Calculate the factorial of the current input
function factorial() {
    var result = 1;
    for (i = currentInput; i > 0; i--) {
        result = result * i;
        console.log(result);
    }
    currentInput = result;
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    currentInput = (Math.pow(currentInput, 2));
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    currentInput = (Math.sqrt(currentInput));
    displayCurrentInput();
}
// Calculate the inverse of the current input
function inverse() {
    currentInput = (1 / currentInput)
    displayCurrentInput();
}
// Holds the value of Pie
function enterPie() {
    currentInput = Math.PI;
    displayCurrentInput();
}

// Sin of a numerical value expressed in radians
function sinRadian() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}
// Cos of a numerical value expressed in radians
function cosRadian() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}
// Tan of a numerical value expressed in radians
function tanRadian() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}
// Sin of a numerical value expressed in degrees
function sinDegree() {
    currentInput = Math.sin((Math.PI / 180) * currentInput);
    displayCurrentInput();
}
// Cos of a numerical value expressed in degrees
function cosDegree() {
    currentInput = Math.cos((Math.PI / 180) * currentInput);
    displayCurrentInput();
}
// Tan of a numerical value expressed in degrees
function tanDegree() {
    currentInput = Math.tan((Math.PI / 180) * currentInput);
    displayCurrentInput();
}
// Calculate using operator, the memory and what is current
var memValue;
// Stores the input on the screen
function memoryStore() {
    memvalue = document.getElementById('screen').value;
}
// Recalls the stored input
function memoryRecall() {
    currentInput = memValue;
    displayCurrentInput();
}
// Adds the current input to the stored input
function memoryPlus() {
    currentInput = parseInt(memValue) + parseInt(currentInput);
    displayCurrentInput();
}
// Subtracts the current input from the stored input
function memoryMinus() {
    currentInput = parseInt(memValue) - parseInt(currentInput);
    displayCurrentInput();
}
// Clears the stored memory and resets it to 0
function memoryClear() {
    memValue = "0";
    currentInput = memValue;
    displayCurrentInput();
}
