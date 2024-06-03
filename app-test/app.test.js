/**
 * @jest-environment jsdom
 */
import $ from "jquery";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("Input #1", () => {
  test("Page has input #1", () => {
    console.log($("#input1"));
    return expect($("#input1")).not.toBeNull();
  });

  test("Input #1 has a maxlength=3", () => {
    return expect($("#input1").maxlength).toBe("3");
  });

  test("Input #1 is required", () => {
    return expect(Promise.resolve(document.getElementById("input1").required()))
      .resolves.not()
      .toBeNull();
  });
});

describe("Input #2", () => {
  test("Page has input #2", () => {
    return expect(
      Promise.resolve(document.getElementById("input2")),
    ).resolves.not.toBeNull();
  });

  test("Input #2 has a maxlength=3", () => {
    return expect(
      Promise.resolve(document.getElementById("input2").maxlength()),
    ).resolves.toBe("3");
  });

  test("Input #2 is required", () => {
    return expect(Promise.resolve(document.getElementById("input2").required()))
      .resolves.not()
      .toBeNull();
  });
});

describe("Operations input", () => {
  //toBeInstanceOf
  describe("+", () => {
    test("Addition radio button exists", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonAddition")),
      ).resolves.not.toBeNull();
    });

    test("Addition radio button is a radio button", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonAddition").type),
      ).resolves.toBe("radio");
    });

    test("Addition radio button in operation group", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonAddition").name),
      ).resolves.toBe("operation");
    });

    test("Addition radio button value is add", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonAddition").value),
      ).resolves.toBe("add");
    });
  });

  describe("-", () => {
    test("Subtraction radio button exists", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonSubtraction")),
      ).resolves.not.toBeNull();
    });

    test("Subtraction radio button is a radio button", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonSubtraction").type),
      ).resolves.toBe("radio");
    });

    test("Subtraction radio button in operation group", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonSubtraction").name),
      ).resolves.toBe("operation");
    });

    test("Subtraction radio button value is sub", () => {
      return expect(
        Promise.resolve(
          document.getElementById("radioButtonSubtraction").value,
        ),
      ).resolves.toBe("sub");
    });
  });

  describe("×", () => {
    test("Multiplication radio button exists", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonMultiplication")),
      ).resolves.not.toBeNull();
    });

    test("Multiplication radio button is a radio button", () => {
      return expect(
        Promise.resolve(
          document.getElementById("radioButtonMultiplication").type,
        ),
      ).resolves.toBe("radio");
    });

    test("Multiplication radio button in operation group", () => {
      return expect(
        Promise.resolve(
          document.getElementById("radioButtonMultiplication").name,
        ),
      ).resolves.toBe("operation");
    });

    test("Multiplication radio button value is mul", () => {
      return expect(
        Promise.resolve(
          document.getElementById("radioButtonMultiplication").value,
        ),
      ).resolves.toBe("mul");
    });
  });

  describe("÷", () => {
    test("Division radio button exists", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonDivision")),
      ).resolves.not.toBeNull();
    });

    test("Division radio button is a radio button", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonDivision").type),
      ).resolves.toBe("radio");
    });

    test("Division radio button in operation group", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonDivision").name),
      ).resolves.toBe("operation");
    });

    test("Division radio button value is div", () => {
      return expect(
        Promise.resolve(document.getElementById("radioButtonDivision").value),
      ).resolves.toBe("div");
    });
  });
});

describe("Form", () => {
  test("Form exists", () => {
    return expect(
      Promise.resolve(document.getElementById("calculatorForm")),
    ).resolves.not.toBeNull();
  });

  test("Has submit button", () => {
    return expect(
      Promise.resolve(document.getElementById("submitButton")),
    ).resolves.not.toBeNull();
  });

  test("Submit button is an input of type submit", () => {
    return expect(
      Promise.resolve(document.getElementById("submitButton").type),
    ).resolves.toBe("submit");
  });
});
