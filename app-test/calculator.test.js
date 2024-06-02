const Calculator = require("../src/calculator.mjs").Calculator;

// describe('Testing the Cube Functions', function() {
// it('1. The side length of the Cube', function(done) {
// let c1 = new Cube(2);
// expect(c1.getSideLength()).to.equal(2);
// done();
// });
//

describe("Testing the checkHexadecimal() function. true = hexadecimal, false != hexidecimal", () => {
  test("Hex with 3 digits between 0-9", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("234")).toBe(true);
  });

  test("Hex with 3 letters between A-F", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("ADE")).toBe(true);
  });

  test("Hex with 3 LOWERCASE letters between A-F", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("abc")).toBe(true);
  });

  test("Hex with 3 letters between G-Z", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("TRN")).toBe(false);
  });

  test("Hex with 3 LOWERCASE letters between G-Z", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("trn")).toBe(false);
  });

  test("Hex with letters between A-F and numbers between 0-9", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("76E")).toBe(true);
  });

  test("Hex with LOWERCASE letters between A-F and numbers between 0-9", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("76e")).toBe(true);
  });

  test("Hex with letters between G-Z and numbers between 0-9", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("I53")).toBe(false);
  });

  test("Hex with LOWERCASE letters between G-Z and numbers between 0-9", () => {
    let c = new Calculator();
    expect(c.checkHexadecimal("m40")).toBe(false);
  });
});

describe("Testing the convertToDecimal() function", () => {
  test("Hex of 3 numbers", () => {
    let c = new Calculator();
    expect(c.convertToDecimal("011")).toBe(17);
  });

  test("Hex of 3 letters", () => {
    let c = new Calculator();
    expect(c.convertToDecimal("ADF")).toBe(2783);
  });

  test("Hex of letters & numbers", () => {
    let c = new Calculator();
    expect(c.convertToDecimal("1E3")).toBe(483);
  });

  test("Hex of LOWERCASE letters", () => {
    let c = new Calculator();
    expect(c.convertToDecimal("bca")).toBe(3018);
  });

  test("Hex of LOWERCASE letters and numbers", () => {
    let c = new Calculator();
    expect(c.convertToDecimal("0ee")).toBe(238);
  });
});

describe("Testing the arithmetic() function", () => {
  test("+", () => {
    let c = new Calculator();
    expect(c.arithmetic(1, 1, "add")).toBe(2);
  });

  test("-", () => {
    let c = new Calculator();
    expect(c.arithmetic(2, 1, "sub")).toBe(1);
  });

  test("×", () => {
    let c = new Calculator();
    expect(c.arithmetic(2, 2, "mul")).toBe(4);
  });

  test("÷", () => {
    let c = new Calculator();
    expect(c.arithmetic(9, 3, "div")).toBe(3);
  });

  test("÷ with remainder (round)", () => {
    let c = new Calculator();
    expect(c.arithmetic(9, 2, "div")).toBe(5);
  });

  test("÷ with remainder (round 2 decimals)", () => {
    let c = new Calculator();
    expect(c.arithmetic(234, 8, "div")).toBe(29);
  });
});

describe("Testing the convertToHex() function", () => {
  test("10", () => {
    let c = new Calculator();
    expect(c.convertToHex(10)).toBe("A");
  });

  test("27", () => {
    let c = new Calculator();
    expect(c.convertToHex(27)).toBe("1B");
  });

  test("194", () => {
    let c = new Calculator();
    expect(c.convertToHex(194)).toBe("C2");
  });

  test("733", () => {
    let c = new Calculator();
    expect(c.convertToHex(733)).toBe("2DD");
  });

  test("5533231", () => {
    let c = new Calculator();
    expect(c.convertToHex(5533231)).toBe("546E2F");
  });
});

describe("Testing the go() function", () => {
  test("Regular addition", () => {
    let c = new Calculator();
    expect(c.go("6", "2A", "add")).toBe("30");
  });

  test("Regular subtraction", () => {
    let c = new Calculator();
    expect(c.go("22", "C", "sub")).toBe("26");
  });

  test("Regular multiplication", () => {
    let c = new Calculator();
    expect(c.go("AAA", "2", "mul")).toBe("3552");
  });

  test("Regular division", () => {
    let c = new Calculator();
    expect(c.go("4E", "D", "div")).toBe("6");
  });

  test("Subtraction with negative result", () => {
    let c = new Calculator();
    expect(c.go("C", "1F4", "sub")).toBeNull();
  });

  test("Division with decimal result", () => {
    let c = new Calculator();
    expect(c.go("9", "2", "div")).toBe("5");
  });

  test("Division with decimal result", () => {
    let c = new Calculator();
    expect(c.go("EA", "8", "div")).toBe("1D");
  });

  test("Result > 6 digits", () => {
    let c = new Calculator();
    expect(c.go("FFF", "FFF", "mul")).toBeNull();
  });
});
