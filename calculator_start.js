var currentInput = "0";
var memory = "0";
var operator = 0;
var memValue; //Value stored in the memory
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
* @return {number} Returns a product, sum, or difference after utilizing an operator function from the storeOperator(op) function or a message displaying an error warning if user attempts to divide by zero
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

/**
* This is a function for finding the factorial of the current input
* @author Keilani Burak
* @return {number} Returns the factorial
*/
function factorial() {
    var result = 1;
    for (i = currentInput; i > 0; i--) {
        result = result * i;
        console.log(result);
    }
    currentInput = result;
    displayCurrentInput();
}

/**
* This is a function for calculating the current input squared
* @author Keilani Burak
* @return {number} Returns the input squared
*/
function square() {
    currentInput = (Math.pow(currentInput, 2));
    displayCurrentInput();
}

/**
* This is a function for calculating the square root of the current input
* @author Keilani Burak
* @return {number} Returns the square root
*/
function squareRoot() {
    currentInput = (Math.sqrt(currentInput));
    displayCurrentInput();
}

/**
* This is a function for calculating the inverse of the current input
* @author Keilani Burak
* @return {number} Returns the inverse
*/
function inverse() {
    currentInput = (1 / currentInput)
    displayCurrentInput();
}

/**
* This is a function for entering the value of Pi
* @author Sinead Swayne
* @return {number} Returns the numerical value for Pi on screen
*/
function enterPie() {
    currentInput = Math.PI;
    displayCurrentInput();
}

/**
* This is a function for finding the sin of a numerical value in radians
* @author Sinead Swayne
* @return {number} Returns the sin of the current input
*/
function sinRadian() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

/**
* This is a function for finding the cos of a numerical value in radians
* @author Sinead Swayne
* @return {number} Returns the cos of the current input
*/
function cosRadian() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

/**
* This is a function for finding the tan of a numerical value in radians
* @author Sinead Swayne
* @return {number} Returns the tan of the current input
*/
function tanRadian() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

/**
* This is a function for finding the sin of a numerical value in degrees
* @author Keilani Burak
* @return {number} Returns the sin of the current input
*/
function sinDegree() {
    currentInput = Math.sin((Math.PI / 180) * currentInput);
    displayCurrentInput();
}

/**
* This is a function for finding the cos of a numerical value in degrees
* @author Keilani Burak
* @return {number} Returns the cos of the current input
*/
function cosDegree() {
    currentInput = Math.cos((Math.PI / 180) * currentInput);
    displayCurrentInput();
}

/**
* This is a function for finding tan of a numerical value in degrees
* @author Keilani Burak
* @return {number} Returns the tan of the current input
*/
function tanDegree() {
    currentInput = Math.tan((Math.PI / 180) * currentInput);
    displayCurrentInput();
}

/**
* This is a function for storing the current input into the memory
* @author Keilani Burak
* @return {number} Returns the current input on the screen
*/
function memoryStore() {
    memValue = document.getElementById('screen').value;
}

/**
* This is a function for recalling the stored memory
* @author Keilani Burak
* @return {number} Returns the stored memory on the screen
*/
function memoryRecall() {
    currentInput = memValue;
    displayCurrentInput();
}

/**
* This is a function for adding the current input to the stored memory
* @author Keilani Burak
* @return {number} Returns a new current input
*/

function memoryPlus() {
    currentInput = parseInt(memValue) + parseInt(currentInput);
    displayCurrentInput();
}

/**
* This is a function for subtracting the current input from the stored memory
* @author Keilani Burak
* @return {number} Returns the new current input
*/
function memoryMinus() {
    currentInput = parseInt(memValue) - parseInt(currentInput);
    displayCurrentInput();
}
/**
* This is a function for erasing the stored memory
* @author Keilani Burak
* @return {number} Returns a 0 on the screen and an empty memory
*/
function memoryClear() {
    memValue = "0";
    currentInput = memValue;
    displayCurrentInput();
}
