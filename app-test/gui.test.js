/**
 * @jest-environment jsdom
 */
import request from "supertest";
import { app } from "../src/app.mjs";
import { parse } from "node-html-parser";
const Calculator = require("../src/calculator.mjs").Calculator;
var server, root;
const $ = require("jquery");

test("use jsdom in this test file", async () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

beforeAll(async () => {
  server = await request(app).get("/");
  root = parse(server.text);
  return;
});

afterAll(() => {
  app.close();
});

describe("Keypad", () => {
  describe("Layout", () => {
    test("Container DIV", async () => {
      expect(root.querySelector(".container")).not.toBeNull();
    });
  });

  describe("Number inputs", () => {
    test("1 button", async () => {
      expect(root.querySelector("#one")).not.toBeNull();
      expect(root.querySelector("#one")._attrs.type).toBe("button");
      expect(root.querySelector("#one").childNodes[0]._rawText).toBe("1");
      expect(root.querySelector("#one")._attrs.onclick).toBe("inputAdded(1)");
    });

    test("2 button", async () => {
      expect(root.querySelector("#two")).not.toBeNull();
      expect(root.querySelector("#two")._attrs.type).toBe("button");
      expect(root.querySelector("#two").childNodes[0]._rawText).toBe("2");
      expect(root.querySelector("#two")._attrs.onclick).toBe("inputAdded(2)");
    });

    test("3 button", async () => {
      expect(root.querySelector("#three")).not.toBeNull();
      expect(root.querySelector("#three")._attrs.type).toBe("button");
      expect(root.querySelector("#three").childNodes[0]._rawText).toBe("3");
      expect(root.querySelector("#three")._attrs.onclick).toBe("inputAdded(3)");
    });

    test("4 button", async () => {
      expect(root.querySelector("#four")).not.toBeNull();
      expect(root.querySelector("#four")._attrs.type).toBe("button");
      expect(root.querySelector("#four").childNodes[0]._rawText).toBe("4");
      expect(root.querySelector("#four")._attrs.onclick).toBe("inputAdded(4)");
    });

    test("5 button", async () => {
      expect(root.querySelector("#five")).not.toBeNull();
      expect(root.querySelector("#five")._attrs.type).toBe("button");
      expect(root.querySelector("#five").childNodes[0]._rawText).toBe("5");
      expect(root.querySelector("#five")._attrs.onclick).toBe("inputAdded(5)");
    });

    test("6 button", async () => {
      expect(root.querySelector("#six")).not.toBeNull();
      expect(root.querySelector("#six")._attrs.type).toBe("button");
      expect(root.querySelector("#six").childNodes[0]._rawText).toBe("6");
      expect(root.querySelector("#six")._attrs.onclick).toBe("inputAdded(6)");
    });

    test("7 button", async () => {
      expect(root.querySelector("#seven")).not.toBeNull();
      expect(root.querySelector("#seven")._attrs.type).toBe("button");
      expect(root.querySelector("#seven").childNodes[0]._rawText).toBe("7");
      expect(root.querySelector("#seven")._attrs.onclick).toBe("inputAdded(7)");
    });

    test("8 button", async () => {
      expect(root.querySelector("#eight")).not.toBeNull();
      expect(root.querySelector("#eight")._attrs.type).toBe("button");
      expect(root.querySelector("#eight").childNodes[0]._rawText).toBe("8");
      expect(root.querySelector("#eight")._attrs.onclick).toBe("inputAdded(8)");
    });

    test("9 button", async () => {
      expect(root.querySelector("#nine")).not.toBeNull();
      expect(root.querySelector("#nine")._attrs.type).toBe("button");
      expect(root.querySelector("#nine").childNodes[0]._rawText).toBe("9");
      expect(root.querySelector("#nine")._attrs.onclick).toBe("inputAdded(9)");
    });

    test("0 button", async () => {
      expect(root.querySelector("#zero")).not.toBeNull();
      expect(root.querySelector("#zero")._attrs.type).toBe("button");
      expect(root.querySelector("#zero").childNodes[0]._rawText).toBe("0");
      expect(root.querySelector("#zero")._attrs.onclick).toBe("inputAdded(0)");
    });

    test("A button", async () => {
      expect(root.querySelector("#A")).not.toBeNull();
      expect(root.querySelector("#A")._attrs.type).toBe("button");
      expect(root.querySelector("#A").childNodes[0]._rawText).toBe("A");
      expect(root.querySelector("#A")._attrs.onclick).toBe("inputAdded(A)");
    });

    test("B button", async () => {
      expect(root.querySelector("#B")).not.toBeNull();
      expect(root.querySelector("#B")._attrs.type).toBe("button");
      expect(root.querySelector("#B").childNodes[0]._rawText).toBe("B");
      expect(root.querySelector("#B")._attrs.onclick).toBe("inputAdded(B)");
    });

    test("C button", async () => {
      expect(root.querySelector("#C")).not.toBeNull();
      expect(root.querySelector("#C")._attrs.type).toBe("button");
      expect(root.querySelector("#C").childNodes[0]._rawText).toBe("C");
      expect(root.querySelector("#C")._attrs.onclick).toBe("inputAdded(C)");
    });

    test("D button", async () => {
      expect(root.querySelector("#D")).not.toBeNull();
      expect(root.querySelector("#D")._attrs.type).toBe("button");
      expect(root.querySelector("#D").childNodes[0]._rawText).toBe("D");
      expect(root.querySelector("#D")._attrs.onclick).toBe("inputAdded(D)");
    });

    test("E button", async () => {
      expect(root.querySelector("#E")).not.toBeNull();
      expect(root.querySelector("#E")._attrs.type).toBe("button");
      expect(root.querySelector("#E").childNodes[0]._rawText).toBe("E");
      expect(root.querySelector("#E")._attrs.onclick).toBe("inputAdded(E)");
    });

    test("F button", async () => {
      expect(root.querySelector("#F")).not.toBeNull();
      expect(root.querySelector("#F")._attrs.type).toBe("button");
      expect(root.querySelector("#F").childNodes[0]._rawText).toBe("F");
      expect(root.querySelector("#F")._attrs.onclick).toBe("inputAdded(F)");
    });

    test("cls button", async () => {
      expect(root.querySelector("#cls")).not.toBeNull();
      expect(root.querySelector("#cls")._attrs.type).toBe("button");
      expect(root.querySelector("#cls").childNodes[0]._rawText).toBe("cls");
      expect(root.querySelector("#cls")._attrs.onclick).toBe("clearAll()");
    });

    test("backspace button", async () => {
      expect(root.querySelector("#back")).not.toBeNull();
      expect(root.querySelector("#cls")._attrs.type).toBe("button");
      expect(root.querySelector("#cls").childNodes[0]._rawText).toBe("&#9003;");
      expect(root.querySelector("#cls")._attrs.onclick).toBe("backspace()");
    });
  });
});
