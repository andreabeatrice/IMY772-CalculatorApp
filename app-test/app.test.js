/**
 * @jest-environment jsdom
 */
import request from "supertest";
import { app } from "../src/app.mjs";
import { parse } from "node-html-parser";

test("use jsdom in this test file", async () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("Input #1", () => {
  test("Page has input #1", async () => {
    const result = await request(app).get("/");
    const root = parse(result.text);

    expect(root.querySelector("#input1")).not.toBeNull();
    //console.log(result);
  });

  test("Input #1 has a maxlength=3", async () => {
    const result = await request(app).get("/");
    const root = parse(result.text);

    expect(root.querySelector("#input1")._attrs.maxlength).toBe("3");
  });

  test("Input #1 is required", async () => {
    const result = await request(app).get("/");
    const root = parse(result.text);

    expect(root.querySelector("#input1")._attrs.required).not.toBeNull();
  });
});

describe("Input #2", () => {
  test("Page has input #2", async () => {
    const result = await request(app).get("/");
    const root = parse(result.text);

    expect(root.querySelector("#input2")).not.toBeNull();
    //console.log(result);
  });

  test("Input #2 has a maxlength=3", async () => {
    const result = await request(app).get("/");
    const root = parse(result.text);

    expect(root.querySelector("#input2")._attrs.maxlength).toBe("3");
  });

  test("Input #2 is required", async () => {
    const result = await request(app).get("/");
    const root = parse(result.text);

    expect(root.querySelector("#input2")._attrs.required).not.toBeNull();
  });
});

describe("Operations input", () => {
  describe("+", () => {
    test("Page has addition radio button", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonAddition")).not.toBeNull();
    });

    test("#radioButtonAddition is of type 'radio'", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonAddition")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonAddition is in 'operation' group", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonAddition")._attrs.name).toBe(
        "operation",
      );
    });

    test("#radioButtonAddition has a value of 'add'", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonAddition")._attrs.value).toBe(
        "add",
      );
    });
  });

  describe("-", () => {
    test("Page has subtraction radio button", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonSubtraction")).not.toBeNull();
    });

    test("#radioButtonSubtraction is of type 'radio'", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonSubtraction")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonSubtraction is in 'operation' group", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonSubtraction")._attrs.name).toBe(
        "operation",
      );
    });

    test("#radioButtonSubtraction has a value of 'sub'", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonSubtraction")._attrs.value).toBe(
        "sub",
      );
    });
  });

  describe("×", () => {
    test("Page has multiplication radio button", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonMultiplication")).not.toBeNull();
    });

    test("#radioButtonMultiplication is of type 'radio'", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonMultiplication")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonMultiplication is in 'operation' group", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(root.querySelector("#radioButtonMultiplication")._attrs.name).toBe(
        "operation",
      );
    });

    test("#radioButtonMultiplication has a value of 'mul'", async () => {
      const result = await request(app).get("/");
      const root = parse(result.text);

      expect(
        root.querySelector("#radioButtonMultiplication")._attrs.value,
      ).toBe("mul");
    });
  });
});

// describe("Operations input", () => {

//   describe("×", () => {
//     test("Multiplication radio button exists", () => {
//       return expect(
//         Promise.resolve(document.getElementById("radioButtonMultiplication")),
//       ).resolves.not.toBeNull();
//     });

//     test("Multiplication radio button is a radio button", () => {
//       return expect(
//         Promise.resolve(
//           document.getElementById("radioButtonMultiplication").type,
//         ),
//       ).resolves.toBe("radio");
//     });

//     test("Multiplication radio button in operation group", () => {
//       return expect(
//         Promise.resolve(
//           document.getElementById("radioButtonMultiplication").name,
//         ),
//       ).resolves.toBe("operation");
//     });

//     test("Multiplication radio button value is mul", () => {
//       return expect(
//         Promise.resolve(
//           document.getElementById("radioButtonMultiplication").value,
//         ),
//       ).resolves.toBe("mul");
//     });
//   });

//   describe("÷", () => {
//     test("Division radio button exists", () => {
//       return expect(
//         Promise.resolve(document.getElementById("radioButtonDivision")),
//       ).resolves.not.toBeNull();
//     });

//     test("Division radio button is a radio button", () => {
//       return expect(
//         Promise.resolve(document.getElementById("radioButtonDivision").type),
//       ).resolves.toBe("radio");
//     });

//     test("Division radio button in operation group", () => {
//       return expect(
//         Promise.resolve(document.getElementById("radioButtonDivision").name),
//       ).resolves.toBe("operation");
//     });

//     test("Division radio button value is div", () => {
//       return expect(
//         Promise.resolve(document.getElementById("radioButtonDivision").value),
//       ).resolves.toBe("div");
//     });
//   });
// });

// describe("Form", () => {
//   test("Form exists", () => {
//     return expect(
//       Promise.resolve(document.getElementById("calculatorForm")),
//     ).resolves.not.toBeNull();
//   });

//   test("Has submit button", () => {
//     return expect(
//       Promise.resolve(document.getElementById("submitButton")),
//     ).resolves.not.toBeNull();
//   });

//   test("Submit button is an input of type submit", () => {
//     return expect(
//       Promise.resolve(document.getElementById("submitButton").type),
//     ).resolves.toBe("submit");
//   });
// });
