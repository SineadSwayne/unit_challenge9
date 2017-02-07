// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    clearCurrent();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});

// Test for finding the factorial of the current input
QUnit.test("Factorial test", function( assert ) {
    clearCurrent();
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
});

// Test for calculating the current input squared
QUnit.test("Square test", function( assert ){
    clearCurrent();
    addDigit('6');
    square();
    assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
});

// Test for calculating the square root of the current input
QUnit.test("Square root test", function( assert ){
    clearCurrent();
    addDigit('49');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "7", "Passed - Expected 7");
});

// Test for calculating the inverse of the current input
QUnit.test("Inverse test", function( assert){
    clearCurrent();
    addDigit('8');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.125", "Passed - Expected 0.125")
});

// Test for finding the sin of a numerical value in degrees
QUnit.test("Sin of Degree test", function (assert){
    clearCurrent();
    addDigit('90');
    sinDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
    clearCurrent();
    addDigit('30');
    sinDegree();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5")
    clearCurrent();
    addDigit('180');
    sinDegree();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0")
    clearCurrent();
    addDigit("270");
    sinDegree();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
});

// Test for finding the cos of a numerical value in degrees
QUnit.test("Cos of degree test", function ( assert){
    clearCurrent();
    addDigit('0');
    cosDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
    clearCurrent();
    addDigit('90');
    cosDegree();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0")
    clearCurrent();
    addDigit('60');
    cosDegree();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5")
    clearCurrent();
    addDigit('180');
    cosDegree();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
});

// Test for finding the tan of a numerical value in degrees
QUnit.test("Tan of degree test", function ( assert){
    clearCurrent();
    addDigit('45');
    tanDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
    clearCurrent();
    addDigit('135');
    tanDegree();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
    clearCurrent();
    addDigit('180');
    tanDegree();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0")

});

// Test for changing the sign of the current input
QUnit.test( "Change sign test", function( assert ) {
    clearCurrent();
    addDigit('12');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-12", "Passed - Expected -12");
});

// Test for current input to a percentage.
QUnit.test( "Change percentage test", function( assert ) {
    clearCurrent();
    addDigit('60');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.6", "Passed - Expected 0.6");
});

// Test for clearing the current input back to 0.
QUnit.test( "Change current test", function( assert ) {
    clearCurrent();
    addDigit('5');
    storeOperator("+");
    addDigit('3');
    clearCurrent();
    addDigit('7');
    calculate();
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});

// Test that ensures the user does not divide by zero.
QUnit.test( "Divide by zero test", function( assert ) {
    clearCurrent();
    addDigit('6');
    storeOperator("/");
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "Error Divide By Zero", "Passed - Expected Error Divide By Zero");
});

// Test calculating the current input squared
QUnit.test("Square test", function( assert ){
    clearCurrent();
    addDigit('6');
    square();
    assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
});

// Test that checks the Pi button holds the correct numerical value for pi, and when clicked on allows for the user to use it.
QUnit.test("Pi test", function( assert ){
    clearCurrent();
    addDigit('1');
    enterPie();
    assert.equal(document.getElementById("screen").value, "3.141592653589793", "Passed - Expected 3.141592653589793");
});

// Test for finding the sin of a numerical value in radians
QUnit.test("Sin of Radian test", function (assert){
    clearCurrent();
    addDigit('Math.PI');
    storeOperator("/");
    addDigit('2');
    calculate();
    sinRadian();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
    clearCurrent();
    addDigit('Math.PI');
    storeOperator("/");
    addDigit('6');
    calculate();
    sinRadian();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5")
    clearCurrent();
    addDigit('Math.PI');
    storeOperator("/");
    addDigit('-2');
    calculate();
    sinRadian();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
});

// Test for finding the cos of a numerical value in radians
QUnit.test("Cos of Radian test", function ( assert){
    clearCurrent();
    addDigit('Math.PI');
    storeOperator("/");
    addDigit('3');
    calculate();
    cosRadian();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5")
    clearCurrent();
    addDigit('Math.PI');
    storeOperator("/");
    addDigit('2');
    calculate();
    cosRadian();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0")
});

// Test for finding the tan of a numerical value in radians
QUnit.test("Tan of Radian test", function ( assert){
    clearCurrent();
    addDigit('Math.PI');
    storeOperator("/");
    addDigit('4');
    calculate();
    tanRadian();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
    clearCurrent();
    addDigit('3');
    storeOperator("*");
    addDigit('Math.PI');
    calculate();
    storeOperator("/");
    addDigit('4');
    calculate();
    tanRadian();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
});

// Test for clearing everything.
QUnit.test("All Clear test", function ( assert){
    clearCurrent();
    addDigit('8');
    allClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0")
});

// Test for displaying the current input.
QUnit.test("Displays current input test", function ( assert){
    clearCurrent();
    addDigit('8');
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "8", "Passed - Expected 8")
});

// Test for calculaing using an operator, the memory and what is current.
QUnit.test("Calculates using an operator test", function ( assert){
    clearCurrent();
    addDigit('5');
    storeOperator("+");
    addDigit('3');
    storeOperator("-");
    addDigit('7');
    storeOperator("*");
    addDigit('7');
    storeOperator("/");
    addDigit('-7');
    calculate();
    storeOperator("EE")
    addDigit('3')
    calculate();
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "-1000", "Passed - Expected -1000")
});

// Test for storing the current input into the memory
QUnit.test("Memory store test", function ( assert){
    clearCurrent();
    addDigit('3')
    memoryStore();
    assert.equal(memValue, "3", "Passed - Expected 3")
           });

// Test for recalling the stored memory
QUnit.test("Memory recall test", function ( assert){
    clearCurrent();
    memoryRecall();
    assert.equal(document.getElementById("screen").value, "3", "Passed - Expected 3")
});

// Test for adding the current input to the stored memory
QUnit.test("Memory plus test", function (assert){
    clearCurrent();
    addDigit('5');
    memoryPlus();
    assert.equal(document.getElementById("screen").value, "8", "Passed - Expected 8")
});

// Test for subtracting the current input from the stored memory
QUnit.test("Memory minus test", function ( assert){
    clearCurrent();
    addDigit('1');
    memoryMinus();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2")
});

// Test for erasing the stored memory
QUnit.test("Memory clear test", function ( assert){
    clearCurrent();
    memoryClear();
    assert.equal(memValue, "0", "Passed - Expected 0")
});

