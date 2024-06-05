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
      expect(root.querySelector("#one")._attrs.onclick).toBe(
        "document.getElementById('input1').setAttribute('value','1');",
      );
    });
  });
});
