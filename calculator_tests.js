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

QUnit.test("Factorial test", function( assert ) {
    clearCurrent();
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
});

QUnit.test("Square test", function( assert ){
    clearCurrent();
    addDigit('6');
    square();
    assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
});

QUnit.test("Square root test", function( assert ){
    clearCurrent();
    addDigit('49');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "7", "Passed - Expected 7");
});

QUnit.test("Inverse test", function( assert){
    clearCurrent();
    addDigit('8');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.125", "Passed - Expected 0.125")
});

QUnit.test("Sin of Degree test", function (assert){
    clearCurrent();
    addDigit('90');
    sinDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
});

QUnit.test("Cos of degree test", function ( assert){
    clearCurrent();
    addDigit('180');
    cosDegree();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
});


QUnit.test("Tan of degree test", function ( assert){
    clearCurrent();
    addDigit('45');
    tanDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
});

QUnit.test("Inverse test", function( assert){
    clearCurrent();
    addDigit('8');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.125", "Passed - Expected 0.125")
});

QUnit.test("Sin of Degree test", function (assert){
    clearCurrent();
    addDigit('90');
    sinDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
});

QUnit.test("Cos of degree test", function ( assert){
    clearCurrent();
    addDigit('180');
    cosDegree();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1")
});


QUnit.test("Tan of degree test", function ( assert){
    clearCurrent();
    addDigit('45');
    tanDegree();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
});

QUnit.test( "Change sign test", function( assert ) {
    clearCurrent();
    addDigit('12');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-12", "Passed - Expected -12");
});

QUnit.test( "Change percentage test", function( assert ) {
    clearCurrent();
    addDigit('60');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.6", "Passed - Expected 0.6");
});

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

QUnit.test( "Divide by zero test", function( assert ) {
    clearCurrent();
    addDigit('6');
    storeOperator("/");
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "Error Divide By Zero", "Passed - Expected Error Divide By Zero");
});

QUnit.test("Square test", function( assert ){
    clearCurrent();
    addDigit('6');
    square();
    assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
});

QUnit.test("Pie test", function( assert ){
    clearCurrent();
    addDigit('1');
    enterPie();
    assert.equal(document.getElementById("screen").value, "3.141592653589793", "Passed - Expected 3.141592653589793");
});

QUnit.test("Sin of Radian test", function (assert){
    clearCurrent();
    addDigit('90');
    sinRadian();
    assert.equal(document.getElementById("screen").value, "0.893997", "Passed - Expected 0.893997")
});

QUnit.test("Cos of Radian test", function ( assert){
    clearCurrent();
    addDigit('180');
    cosRadian();
    assert.equal(document.getElementById("screen").value, "-0.59846", "Passed - Expected -0.59846")
});


QUnit.test("Tan of Radian test", function ( assert){
    clearCurrent();
    addDigit('45');
    tanRadian();
    assert.equal(document.getElementById("screen").value, "1.619775", "Passed - Expected 1.619775")
});


QUnit.test("All Clear test", function ( assert){
    clearCurrent();
    addDigit('8');
    allClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0")
});


QUnit.test("Displays current input test", function ( assert){
    clearCurrent();
    addDigit('8');
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "8", "Passed - Expected 8")
});


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
    addDigit('7');
    calculate();
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1")
});
