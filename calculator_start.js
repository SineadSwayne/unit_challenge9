var currentInput = "0";
var memory = "0";
var operator = 0;
var memValue; //Value stored in the memory

/**
 * Helper function for displaying the current input
 * @author Steve Temple
 */
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

/**
 * Adds a digit to the current input
 * @author Steve Temple
 * @param {string} dig This is the character representing the dig
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
 * @param {string} op This is the character representing the operator
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
 */
function changeSign() {
    currentInput = (currentInput * -1)
    displayCurrentInput();
}

/**
 * This is a function for clearing the current input back to 0.
 * @author Sinead Swayne
 */
function clearCurrent() {
    currentInput = "0";
    displayCurrentInput();
}

/**
 * Change the current input to a percentage.
 * @author Sinead Swayne
 */
function percentage() {
    currentInput = (currentInput / 100);
    displayCurrentInput();
}

/**
 * This is a function for finding the factorial of the current input
 * @author Keilani Burak
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
 */
function square() {
    currentInput = (Math.pow(currentInput, 2));
    displayCurrentInput();
}

/**
 * This is a function for calculating the square root of the current input
 * @author Keilani Burak
 */
function squareRoot() {
    currentInput = (Math.sqrt(currentInput));
    displayCurrentInput();
}

/**
 * This is a function for calculating the inverse of the current input
 * @author Keilani Burak
 */
function inverse() {
    currentInput = (1 / currentInput)
    displayCurrentInput();
}

/**
 * This is a function for entering the value of Pi
 * @author Sinead Swayne
 */
function enterPie() {
    currentInput = Math.PI;
    displayCurrentInput();
}

/**
 * This is a function for finding the sin of a numerical value in radians
 * @author Sinead Swayne
 */
function sinRadian() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

/**
 * This is a function for finding the cos of a numerical value in radians
 * @author Sinead Swayne
 */
function cosRadian() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

/**
 * This is a function for finding the tan of a numerical value in radians
 * @author Sinead Swayne
 */
function tanRadian() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

/**
 * This is a function for finding the sin of a numerical value in degrees
 * @author Keilani Burak
 */
function sinDegree() {
    currentInput = Math.sin((Math.PI / 180) * currentInput);
    displayCurrentInput();
}

/**
 * This is a function for finding the cos of a numerical value in degrees
 * @author Keilani Burak
 */
function cosDegree() {
    currentInput = Math.cos((Math.PI / 180) * currentInput);
    displayCurrentInput();
}

/**
 * This is a function for finding tan of a numerical value in degrees
 * @author Keilani Burak
 */
function tanDegree() {
    currentInput = Math.tan((Math.PI / 180) * currentInput);
    displayCurrentInput();
}

/**
 * This is a function for storing the current input into the memory
 * @author Keilani Burak
 */
function memoryStore() {
    memValue = document.getElementById('screen').value;
}

/**
 * This is a function for recalling the stored memory
 * @author Keilani Burak
 */
function memoryRecall() {
    currentInput = memValue;
    displayCurrentInput();
}

/**
 * This is a function for adding the current input to the stored memory
 * @author Keilani Burak
 */
function memoryPlus() {
    currentInput = parseInt(memValue) + parseInt(currentInput);
    displayCurrentInput();
}

/**
 * This is a function for subtracting the current input from the stored memory
 * @author Keilani Burak
 */
function memoryMinus() {
    currentInput = parseInt(memValue) - parseInt(currentInput);
    displayCurrentInput();
}

/**
 * This is a function for erasing the stored memory
 * @author Keilani Burak
 */
function memoryClear() {
    memValue = "0";
    currentInput = memValue;
    displayCurrentInput();
}
