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

