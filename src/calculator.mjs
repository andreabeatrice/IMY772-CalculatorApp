//THIS EXPORT KEYWORD IS FOR RUNNING; REMOVE FOR JEST
export class Calculator {
  constructor() {}

  checkHexadecimal(hex) {
    var re = new RegExp("^[0-9A-F]{1,3}$");
    return re.test(hex.toUpperCase());
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
    return parseInt(dec, 10).toString(16).toUpperCase();
  }

  go(hex1, hex2, op) {
    var d1 = this.convertToDecimal(hex1);
    var d2 = this.convertToDecimal(hex2);

    var decResult = this.arithmetic(d1, d2, op);

    if (decResult < 0) {
      return null;
    } else {
      var hexResult = this.convertToHex(decResult);
      if (hexResult.length > 6) {
        return null;
      } else return hexResult.toUpperCase();
    }
  }
}

//FOR JEST
// module.exports = {
//   Calculator: Calculator,
// };
