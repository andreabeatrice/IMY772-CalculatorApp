class Calculator {
  constructor() { }

  constructor(hex1, hex2, op) { }

  checkHexadecimal(hex) {
    var re = new RegExp("^[0-9A-F]{1,3}$");
    return re.test(hex);

  }

  convertToDecimal(hex) {
    return parseInt(hex, 16);
  }

  arithmetic(dec1, dec2, op) {
    switch (op) {
      case "add":
        return dec1 + dec2;
        break;
      case "sub":
        return dec1 - dec2;
        break;
      case "mul":
        return dec1 * dec2;
        break;
      case "div":
        return Math.round(dec1 / dec2);
        break;
      default:
        break;
    }
  }

  convertToHex(dec) {
    return parseInt(dec, 10).toString(16);
  }

  go(hex1, hex2, op) { }
}

export const Calculator = Calculator;
