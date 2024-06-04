/**
 * @jest-environment jsdom
 */
import request from "supertest";
import { app } from "../src/app.mjs";
import { parse } from "node-html-parser";
const Calculator = require("../src/calculator.mjs").Calculator;
var server, root;

test("use jsdom in this test file", async () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("hex1 check hexadecimal", () => {
  afterEach(() => {
    app.close();
  });

  test("hex1=234 || expecting this test to be empty ie hex1 is valid hexadecimal", async () => {
    const s = await request(app).get("/?hex1=234&hex2=333&operation=mul#");
    const r = parse(s.text);
    const path = s.req.path;

    expect(r.querySelector("#par").childNodes[0]._rawText).toBe(" ");
  });

  test("hex1=ADE || expecting this test to be empty ie hex1 is valid hexadecimal", async () => {
    const s = await request(app).get("/?hex1=ADE&hex2=333&operation=mul#");
    const r = parse(s.text);
    const path = s.req.path;

    expect(r.querySelector("#par").childNodes[0]._rawText).toBe(" ");
  });

  test("hex1=abc || expecting this test to be empty ie hex1 is valid hexadecimal", async () => {
    const s = await request(app).get("/?hex1=abc&hex2=333&operation=mul#");
    const r = parse(s.text);
    const path = s.req.path;

    expect(r.querySelector("#par").childNodes[0]._rawText).toBe(" ");
  });
});

describe("Input #1", () => {
  beforeAll(async () => {
    server = await request(app).get("/");
    root = parse(server.text);
    return;
  });

  afterAll(() => {
    app.close();
  });
  test("Page has input #1", async () => {
    expect(root.querySelector("#input1")).not.toBeNull();
    //console.log(result);
  });

  test("Input #1 has a maxlength=3", async () => {
    expect(root.querySelector("#input1")._attrs.maxlength).toBe("3");
  });

  test("Input #1 is required", async () => {
    expect(root.querySelector("#input1")._attrs.required).not.toBeNull();
  });

  test("Input #1 has a name", async () => {
    expect(root.querySelector("#input1")._attrs.name).not.toBeNull();
  });
});

describe("Input #2", () => {
  test("Page has input #2", async () => {
    expect(root.querySelector("#input2")).not.toBeNull();
    //console.log(result);
  });

  test("Input #2 has a maxlength=3", async () => {
    expect(root.querySelector("#input2")._attrs.maxlength).toBe("3");
  });

  test("Input #2 is required", async () => {
    expect(root.querySelector("#input2")._attrs.required).not.toBeNull();
  });

  test("Input #2 has a name", async () => {
    expect(root.querySelector("#input2")._attrs.name).not.toBeNull();
  });
});

describe("Operations input", () => {
  describe("+", () => {
    test("Page has addition radio button", async () => {
      expect(root.querySelector("#radioButtonAddition")).not.toBeNull();
    });

    test("#radioButtonAddition is of type 'radio'", async () => {
      expect(root.querySelector("#radioButtonAddition")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonAddition is in 'operation' group", async () => {
      expect(root.querySelector("#radioButtonAddition")._attrs.name).toBe(
        "operation",
      );
    });

    test("#radioButtonAddition has a value of 'add'", async () => {
      expect(root.querySelector("#radioButtonAddition")._attrs.value).toBe(
        "add",
      );
    });
  });

  describe("-", () => {
    test("Page has subtraction radio button", async () => {
      expect(root.querySelector("#radioButtonSubtraction")).not.toBeNull();
    });

    test("#radioButtonSubtraction is of type 'radio'", async () => {
      expect(root.querySelector("#radioButtonSubtraction")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonSubtraction is in 'operation' group", async () => {
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
      expect(root.querySelector("#radioButtonMultiplication")).not.toBeNull();
    });

    test("#radioButtonMultiplication is of type 'radio'", async () => {
      expect(root.querySelector("#radioButtonMultiplication")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonMultiplication is in 'operation' group", async () => {
      expect(root.querySelector("#radioButtonMultiplication")._attrs.name).toBe(
        "operation",
      );
    });

    test("#radioButtonMultiplication has a value of 'mul'", async () => {
      expect(
        root.querySelector("#radioButtonMultiplication")._attrs.value,
      ).toBe("mul");
    });
  });

  describe("÷", () => {
    test("Page has division radio button", async () => {
      expect(root.querySelector("#radioButtonDivision")).not.toBeNull();
    });

    test("#radioButtonDivision is of type 'radio'", async () => {
      expect(root.querySelector("#radioButtonDivision")._attrs.type).toBe(
        "radio",
      );
    });

    test("#radioButtonDivision is in 'operation' group", async () => {
      expect(root.querySelector("#radioButtonDivision")._attrs.name).toBe(
        "operation",
      );
    });

    test("#radioButtonDivision has a value of 'div'", async () => {
      expect(root.querySelector("#radioButtonDivision")._attrs.value).toBe(
        "div",
      );
    });
  });
});

describe("Form", () => {
  test("Form exists", async () => {
    expect(root.querySelector("#calculatorForm")).not.toBeNull();
  });

  test("Has submit button", async () => {
    expect(root.querySelector("#submitButton")).not.toBeNull();
  });
});
